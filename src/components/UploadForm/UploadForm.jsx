import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

// styles import
import * as C from "./UploadForm.styles";

export const UploadForm = () => {
    const [file, setFile] = useState(null);
    const allowedTypes = ["image/jpeg", "image/png"];

    // useEffect just to log the file value, remove this later
    useEffect(() => {
        console.log(file);
    }, [file]);

    const changeFile = async e => {
        let selectedFile = e.target.files[0];

        // Check if file is available and if his type is allowed
        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
        } else {
            setFile(null);
            console.log("Erro ao enviar a imagem");
        }
    };

    return (
        <C.Form>
            <label htmlFor="file">
                <AiOutlinePlus size={32} />
            </label>
            <input onChange={changeFile} type="file" name="file" id="file" />
        </C.Form>
    );
};
