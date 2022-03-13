import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Modal from 'react-modal'

import { FileDropContainer,
        FileDropWrapper,
        FileDropInput,
        FileDropDecription1,
        FileDropDecription2,
        ModalContainer,
        CloseModalBtn,
        FileBtn,
        FileBtnLink,
        FileRejectionItems,
        AcceptedFileItems,
        Filecheck

} from './FileDropZoneElements';

/* 해야할것:
    1.
        isFocused,
        isDragAccept,
        isDragReject이용해서 drag event에 따른 dropzone변화주기
        -> useState랑 FileDropZone의 props를 이용하면 될거같음
        https://react-dropzone.js.org/#section-styling-dropzone
    2.
        multiple files upload with progressbar
        https://www.bezkoder.com/react-dropzone-multiple-files-upload/
        ->당장은 필요없음

    3.
        server로 file data communication?
        (node.js , firebase, aws a3...)
        or
        web에서 file data만 prusa slicer로 돌리기?
    4. 
        ok button onclick 후 printing setting page 구성하기
        (STL to Gcode 구현해야함)
    5.
        미리보기는 dropzone안으로 바꾸고 delete button 구현하기
    ** file 용량 제한**

    **파일 하나만 들어오면 바로 print setting page로

    **서포터 안내문구, 서포터 덜 생기도록 tip도 쓰자 지면으로부터 60도 이상 이면 서포터가 덜 생김**
    */
Modal.setAppElement('body');
const FileDropZone = (props) => {
    const [files, setFiles] = useState([]);

    const [borderColor, setBorderColor] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {
        getRootProps, 
        getInputProps,
        acceptedFiles,
        fileRejections

    } = useDropzone({
        accept : '.stl',
    });

    // const acceptedFileItems = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //       {file.path} - {file.size} bytes
    //     </li>
    //   ));
    
    //   const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //     <li key={file.path}>
    //       {file.path} - {file.size} bytes
    //       <ul>
    //         {errors.map(e => (
    //           <li key={e.code}>{e.message}</li>
    //         ))}
    //       </ul>
    //     </li>
    //   ));
    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const validateFile = (file) => {
        console.log(file.type);
        console.log(file.name.substring(4, 6));
        const filename = file.name;

        for(let i = filename.length; i>0; i--){
          console.log(filename.substring(i-1, i));
          if(filename.substring(i-1, i) === "."){
            if(filename.substring(i-1, filename.length) === ".stl"){
                return true;
            }
          }
        }

        return false;
    }
    const handleFiles = (files) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                // add a new property called invalid
                files[i]['invalid'] = true;
                // add to the same array so we can display the name of the file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // set error message
                setErrorMessage('File type not permitted');

            }
        }
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle = "This is modal";
    function openModal() {
      setIsOpen(true);
    }
    const customStyles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        zIndex: 10,
      },
      content: {
        display: "flex",
        ailgnItems : "center",
        justifyContent: "center",
        background: "#ffffe7",
        overflow: "auto",
        width : "600px",
        height : "400px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        WebkitOverflowScrolling: "touch",
        borderRadius: "14px",
        outline: "none",
        zIndex: 10,
      },
    };
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }



    const dragOver = (e) => {
        e.preventDefault();
        setBorderColor(true);
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
        setBorderColor(false);
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
        setBorderColor(false);   
        if(files.length){
          handleFiles(files);
        }
        openModal();
    }

    //console.log(acceptedFiles);

    
  
    return (
      <FileDropContainer>
        <FileDropWrapper borderColor = {borderColor} {...getRootProps()}
            onDragOver = {dragOver}
            onDragEnter = {dragEnter}
            onDragLeave = {dragLeave}
            onDrop = {fileDrop}
        >
          <FileDropInput {...getInputProps()} />
          <FileDropDecription1>Only STL File</FileDropDecription1>
          <FileDropDecription2>Drag N drop some files here, or click to select files</FileDropDecription2>

        </FileDropWrapper>
        <div className="file-display-container">
            {
                selectedFiles.map((data, i) => 
                    <div className="file-status-bar" key={i}>
                        <div>
                            <div className="file-type-logo"></div>
                            <div className="file-type">{fileType(data.name)}</div>
                            <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                            <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                        </div>
                        <div className="file-remove">X</div>
                    </div>
                )
            }
        </div>
        <ModalContainer id="ok">
          <button onClick={openModal}>Open Modal</button>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          centered
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <CloseModalBtn onClick={closeModal}>close</CloseModalBtn>
            <div>I am a modal</div>
            <form>
              
            </form>
          </Modal>
        </ModalContainer>
        {/* <Filecheck>
            <h4>Accepted files</h4>
            <AcceptedFileItems>
                {acceptedFileItems}
            </AcceptedFileItems>
            <h4>Rejected files</h4>
            <FileRejectionItems>
                {fileRejectionItems}
            </FileRejectionItems>
        </Filecheck>
        <FileBtn>
            <FileBtnLink to= '/printsetting'>ok</FileBtnLink>
        </FileBtn> */}
      </FileDropContainer>
    );
}

export default FileDropZone