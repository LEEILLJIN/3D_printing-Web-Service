import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'

import { FileDropContainer,
        FileDropWrapper,
        FileDropInput,
        FileDropDecription,
        TumbContainer,
        Thumb,
        ThumbInner,
        IMG,
        FileBtn,
        FileBtnLink

} from './FileDropZoneElements';

/* 해야할것:
    1.
        isFocused,
        isDragAccept,
        isDragReject이용해서 drag event에 따른 dropzone변화주기
        https://react-dropzone.js.org/#section-styling-dropzone
    2.
        multiple files upload with progressbar
        https://www.bezkoder.com/react-dropzone-multiple-files-upload/
    3.
        server로 file data communication?
        (node.js , firebase, aws a3...)
        or
        web에서 file data만 prusa slicer로 돌리기?
    4. 
        ok button onclick 후 printing setting page 구성하기
        (STL to Gcode 구현해야함)
    */
const FileDropZone = (props) => {
    const [files, setFiles] = useState([]);

    const {
        getRootProps, 
        getInputProps
    } = useDropzone({
        accept : '.png',
        onDrop : acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview : URL.createObjectURL(file)
            })));
        }
    });
  
    const thumbs = files.map(file => (
        <TumbContainer>
            <Thumb key={file.name}>
            <ThumbInner>
                <IMG
                src={file.preview}
                />
            </ThumbInner>
            </Thumb>
        </TumbContainer>
      ));
    
  
    return (
      <FileDropContainer>
        <FileDropWrapper {...getRootProps()}>
          <FileDropInput {...getInputProps()} />
          <FileDropDecription>Drag N drop some files here, or click to select files</FileDropDecription>
        </FileDropWrapper>
        {thumbs}
        <FileBtn>
            <FileBtnLink to= '/printsetting'>ok</FileBtnLink>
        </FileBtn>
      </FileDropContainer>
    );
}

export default FileDropZone