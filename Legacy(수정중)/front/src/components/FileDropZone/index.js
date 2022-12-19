import React, {useEffect, useState, useRef} from 'react'
import {useDropzone} from 'react-dropzone'
import Modal from 'react-modal'
import PrintinfoCheckBox from '../PrintinfoCheckBox'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FileDropContainer,
        FileDropWrapper,
        FileDropInput,
        FileDropDecription1,
        FileDropDecription2,
        ModalContainer,
        CloseModalBtn,
        BtnContainer,
        ModalBtnLink,
        FileInput
        
} from './FileDropZoneElements';
//import { response } from 'express'
// response 하려고 하면 error가 많이 뜬다 왜???


// stl temp 폴더 : 사용자가 올린 stl 파일
// gcode temp 폴더 : 사용자가 올린 stl 파일을 gcode로 변환해서 저장하는 폴더
// stl all 폴더 :
// gcode all 폴더 :
Modal.setAppElement('body');
const FileDropZone = (props) => {

    const [borderColor, setBorderColor] = useState(false);
    const [Uploadfilename, setUploadFileName] = useState("")

    const [selectedFiles, setSelectedFiles] = useState([]);

    const {
        getRootProps, 
        getInputProps,
        acceptedFiles,
        fileRejections

    } = useDropzone({
        accept : '.stl',

    });

    const [files, setFiles] = useState([])

    // const fileType = (fileName) => {
    //     return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    // }

    // const fileSize = (size) => {
    //     if (size === 0) return '0 Bytes';
    //     const k = 1024;
    //     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    //     const i = Math.floor(Math.log(size) / Math.log(k));
    //     const parseSize = parseFloat((size / Math.pow(k, i)).toFixed(2));
    //     return parseSize + ' ' + sizes[i];
    // }

    const CheckfileSize = (size) => {//나중에 조금 더 깔끔하게 고쳐보자
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        const parseSize = parseFloat((size / Math.pow(k, i)).toFixed(2));
        if(sizes[i]==sizes[3] || sizes[i]==sizes[4]){
            return 51;
        }else if(sizes[i]==sizes[0] || sizes[i]==sizes[1]){
            return 0;
        }else{
            return parseSize;
        }
    }

    const validateFile1 = (file) => {
       
        const filename = file.name;

        for(let i = filename.length; i>0; i--){

          if(filename.substring(i-1, i) === "."){
            if(filename.substring(i-1, filename.length) === ".stl"){
                return true; 
            }
          }
        }

        return false;
    } 

    const handleFiles1 = (files) => {
        let parseSize = 0;
        console.log(files.length)
        for(let i = 0; i < files.length; i++) {
            if (validateFile1(files[i])) {
                setFiles(files)
                console.log(files[i]);
                console.log(files[i].name);//file size
                setUploadFileName(files[i].name)
                
                parseSize = CheckfileSize(files[i].size);

                // //stl을 파일을 백앤드로 보내줌
                // let formData = new FormData();
                // const config = {
                //     header:{'content-type': 'multipart/form-data'}
                // }
                // formData.append("file", files[i])

                // axios.post('')

                if(parseSize<80){//나중에는 51로 왜냐하면 파일 용량 제한 51mb라서
                    setSelectedFiles(prevArray => [...prevArray, files[i]]);
                    
                    //FileToUrl(files[i].name);
                    let reader = new FileReader();
                    let file = files[i];
                    reader.onload = () => {
                        this.setState({
                            file : file,


                        })
                    }
                    openModal();

                }else{
                    alert("file 용량 체크")
                }
                
            } else {
                alert("STL 파일만 가능합니다.")

            }
        }
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal=()=> {
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
        flexDirection: "column",
        justifyContent: "center",
        background: "#ffffe7",
        overflow: "auto",
        width : "800px",
        height : "500px",
        padding : "15px",
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        WebkitOverflowScrolling: "touch",
        borderRadius: "14px",
        outline: "none",
        zIndex: 10,
      },
    };
    const afterOpenModal = () => {
     
    }
  
    const closeModal = () => {
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
        setBorderColor(false);
        

        if(files.length){
          handleFiles1(files);
        }
       
    }

    const fileInputRef = useRef();

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles1(fileInputRef.current.files);
            console.log(fileInputRef.current.files)
        }
    }

    // const handlePost = (filename) => {
    //   const formData = new FormData();
    //   for(let i = 0; i < files.length; i++){
    //     if (filename == files[i].name){
    //       formData.append('file', files[i]);
    //     }

    //   }

    //   return axios.post("/api/upload", formData).then(res => {
    //     // alert('성공')
    //   }).catch(err => {
    //     // alert('실패')
    //   })
    // }


    //console.log(acceptedFiles);

    // const handleFile = (e) => {
    //     const formdata = new FormData()
        

    //     const config = {
    //         header: {'content-type' : 'multipart/form-data'}
    //     }

    //     formdata.append('uploadfile', files[0])

    //     axios.post('',form, config)
    //         // 백엔드가 file 저장하고 그 결과가 response에 담김
    //         // 백엔드는 그 결과를 프론트로 보내줌
    //         // axios.post안의 ''에 뭐가 들어가야 할까
    //         .then(response =>{
    //             if(response.data.success){

    //             }else{
    //                 alert('파일 저장 실패')
    //             }
    //         })
    // }
  
    return (
      <FileDropContainer >
        <FileDropWrapper 
            borderColor = {borderColor} {...getRootProps()}
            onDragOver = {dragOver}
            onDragEnter = {dragEnter}
            onDragLeave = {dragLeave}
            onDrop = {fileDrop}
            onClick={fileInputClicked}
        >
        
          <FileDropInput {...getInputProps()} />
          <FileDropDecription1>Only STL File</FileDropDecription1>
          <FileDropDecription2>Drag N drop some files here, or click to select files</FileDropDecription2>
          <FileInput
            ref={fileInputRef}
            className="file-input"
            type="file"
            onChange={filesSelected}
            />

        </FileDropWrapper>

        <ModalContainer id="ok">
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
          centered
        >
            
            <PrintinfoCheckBox value = {Uploadfilename}/>
            <BtnContainer>
                <CloseModalBtn onClick={closeModal}>Close</CloseModalBtn>
                
                <ModalBtnLink to = 
                  {{pathname : '/printsetting', 
                    state : {
                      Uploadfilename : {Uploadfilename}
                      }
                  }}
                  /*onClick = {handlePost(Uploadfilename)}*/>Next</ModalBtnLink>
            </BtnContainer>
          </Modal>
        </ModalContainer>
        
        {/* <FileBtn>
            <FileBtnLink to= '/printsetting'>ok</FileBtnLink>
        </FileBtn> */}
      </FileDropContainer>
    );
}

export default FileDropZone