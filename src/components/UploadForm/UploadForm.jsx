import { useState } from "react";
import { AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import { imagesFetch } from "../../api/config";

// context imports
import { useContext } from "react";
import { ImgContext } from "../../context/imgContext";

// styles import
import * as C from "./UploadForm.styles";

export const UploadForm = () => {
    const { images, setImages } = useContext(ImgContext);
    const [file, setFile] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(false);
    const allowedTypes = ["image/jpeg", "image/png"];

    // submit form & upload file function
    const submitForm = async e => {
        e.preventDefault();

        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            await imagesFetch.post("/upload", formData).then(res => {
                setImages(res.data.images);
            });
        }

        setFile(null);
        setIsSending(false);
    };

    // change selected file function
    const changeFile = e => {
        let selectedFile = e.target.files[0];

        // Check if file is available and if his type is allowed
        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setIsSending(true);

            if (error) {
                setError(false);
            }
        } else {
            setFile(null);
            setError(true);
        }
    };

    return (
        <C.Form encType="multipart/form-data" onSubmit={submitForm}>
            <label htmlFor="file">
                <AiOutlinePlus size={32} />
            </label>
            <input onChange={changeFile} type="file" name="file" id="file" />
            <C.ErrorCard error={error}>
                <AiFillCloseCircle
                    size={22}
                    style={{ cursor: "pointer", position: "absolute", top: "2", right: "2" }}
                    onClick={() => setError(false)}
                />
                <p>Erro ao enviar a imagem. Cheque se o tipo da imagem é válido{" (jpeg, png)"}</p>
            </C.ErrorCard>
            <C.submitFormCard isSending={isSending}>
                <p>Arquivo pronto para ser enviado</p>
                <button type="submit">Salvar</button>
            </C.submitFormCard>
        </C.Form>
    );
};
