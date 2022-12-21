import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

interface AlertProps {
  isOpen: boolean;
  status: "success" | "fail";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Alert({ isOpen, status, setIsOpen }: AlertProps) {
  if (!isOpen) return null;

  return (
    <div className="AlertOverlay bg-black/70 inset-0 fixed z-40">
      <div className="AlertContent flex flex-col justify-center items-center fixed bg-[#413436] py-4 px-6 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded w-96 shadow-lg z-50">
        {status === "success" ? (
          <>
            <CheckCircleIcon className="w-16 h-16 text-green-300" />
            <p className="font-bold mb-4 text-lg">
              {" "}
              Email enviado com sucesso!{" "}
            </p>{" "}
            <p className="text-center mb-6">
              Obrigado pelo contato, responderei o mais breve possível!{" "}
            </p>
          </>
        ) : (
          <>
            <XCircleIcon className="w-16 h-16 text-red-300" />
            <p className="font-bold mb-4 text-lg">
              {" "}
              Ops, algo deu errado!{" "}
            </p>{" "}
            <p className="text-center mb-6">
              Tente enviar novamente ou se preferir me contate diretamente!{" "}
            </p>
          </>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="uppercase p-2 text-sm text-red-500 font-semibold"
        >
          fechar
        </button>
      </div>
    </div>
  );
}

export default Alert;
