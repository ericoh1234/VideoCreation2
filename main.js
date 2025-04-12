import 'fileUpload.js';

import { uploadFile } from 'fileUpload.js';

function fileUpload() {
  console.log("fileUpload function called");
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  console.log('file: ', file);

  if (file) {
        console.log('About to call uploadFile with:', file);
    uploadFile(file);
  } else {
    console.log('No file selected.');
  }
}

function main(){
    console.log('main function called');
    const uploadButton = document.getElementById('uploadButton');
    uploadButton.addEventListener('click', fileUpload);
}

main()
