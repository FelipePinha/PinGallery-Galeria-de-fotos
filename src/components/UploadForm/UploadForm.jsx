import * as C from "./UploadForm.styles";
import { AiOutlinePlus } from "react-icons/ai";

export const UploadForm = () => {
    return (
        <C.Form>
            <label htmlFor="file">
                <AiOutlinePlus size={32} />
            </label>
            <input type="file" name="file" id="file" />
        </C.Form>
    );
};
