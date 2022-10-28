import React, { useEffect} from 'react';
import { PaymentBtn } from './PaymentBtnStyle';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { animateScroll as scroll } from "react-scroll";
import swal from '@sweetalert/with-react';
const Payment = (effect, deps) => {
	
	useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
        	document.head.removeChild(jquery);
        	document.head.removeChild(iamport);
        }
    }, []);

    const onClickPayment = () => {
    	const { IMP } = window;
    	IMP.init("imp11527355");

    	const data = {
    		pg: 'html5_inicis',
    		pay_method: 'card',
    		merchant_uid: `mid_${new Date().getTime()}`,
    		name: 'PikachuThick_tail',
    		amount: '6256',
    		custom_data: {
                name: '부가정보',
                desc: '세부 부가정보'
    		},
    		buyer_name: '홍길동',
    		buyer_tel: '01012345678',
    		buyer_email: 'qjsro368@gmail.com',
    		buyer_addr: '구천면로 000-00',
    		buyer_postalcode: '01234'
    	};

    	IMP.request_pay(data, callback);
    }

	// const [modalIsOpen, setIsOpen] = React.useState(false);

    // const openModal=()=> {
    //   setIsOpen(true);
    // }
    // const customStyles = {
    //   overlay: {
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: "rgba(255, 255, 255, 0.45)",
    //     zIndex: 10,
    //   },
    //   content: {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     background: "#ffffe7",
    //     overflow: "auto",
    //     width : "800px",
    //     height : "500px",
    //     padding : "15px",
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     //bottom: 'auto',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)',
    //     WebkitOverflowScrolling: "touch",
    //     borderRadius: "14px",
    //     outline: "none",
    //     zIndex: 10,
    //   },
    // };
    // const afterOpenModal = () => {
    //   // references are now sync'd and can be accessed.
    //  // subtitle.style.color = '#f00';
    // }
  
    // const closeModal = () => {
    //   setIsOpen(false);
    // }
	const MySwal = withReactContent(Swal);


    const callback = (response) => {
    	const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} =response;

    	if (success){
			swal({
				content: <div>결제 성공</div>,
				buttons: true,
			  });
			  
    		// alert('결제 성공');
    	} else {
			
				swal({
					content: <div>결제 실패: {error_msg}</div>,
					buttons: true,
				  }).then(function() {
					window.location = "/";
				});
				
				  
			
		  
			// alert(`결제 실패: ${error_msg}`);
    	}
    }

	   
    return (
        <>
			<PaymentBtn onClick={onClickPayment}>Payment</PaymentBtn>
        </>
    );
};
export default Payment;