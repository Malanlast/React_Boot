import { IoClose } from "react-icons/io5";
import {createPortal} from "react-dom";
function Modal({onClose,isOpen,children}) {
	return createPortal(
		<> 
			{isOpen&&(
			<div   className="top-0 grid place-icon-center absolute z-45 h-screen w-screen backdrop-blur">
			<div className="bg-white m-auto relative z-50 min-w-[200px] min-w-[80%] p-4">
				<div className="flex justify-end"  onClick={onClose}><IoClose className="text-2xl self-end"/>
				</div>
				 {children}
			</div>
		    </div>
			)}
		</>,document.getElementById("modal-root")
	);
};

export default Modal
