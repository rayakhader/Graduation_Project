import { useCopySnackbar } from "../context/CopySnackbarContext";

export const useCopyToClipboard =()=>{
const {setOpenSnackbar}=useCopySnackbar()
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setOpenSnackbar(true)
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };
  return {copyToClipboard}
}