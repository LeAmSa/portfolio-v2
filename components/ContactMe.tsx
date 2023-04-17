import { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { PageInfo } from "../typings";
import Spinner from "./Spinner";
import Alert from "./Alert";

interface ContactMeProps {
  pageInfo: PageInfo;
}

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactMe({ pageInfo }: ContactMeProps) {
  const [isEmailAlertOpen, setIsEmailAlertOpen] = useState(false);
  const [alertStatusMessage, setAlertStatusMessage] = useState<
    "success" | "fail"
  >("success");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_KEY!
      );
      setIsEmailAlertOpen(true);
      setAlertStatusMessage("success");
    } catch (error) {
      console.log(error);
      setIsEmailAlertOpen(true);
      setAlertStatusMessage("fail");
    }
  };

  return (
    <div className="h-screen relative flex flex-col items-center text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto z-0">
      <SectionTitle title="Contato" />

      <div className="mt-24 md:mt-32 flex flex-col space-y-5">
        <motion.h4
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-semibold text-center"
        >
          Eu tenho o que você precisa.{" "}
          <span className="underline decoration-red-500/80">
            Vamos conversar.
          </span>
        </motion.h4>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="space-y-1 md:space-y-3"
        >
          <div className="flex items-center justify-center space-x-2">
            <PhoneIcon className="text-red-500 h-4 w-4 animate-pulse" />
            <p className="text-sm md:text-base">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <EnvelopeIcon className="text-red-500 h-4 w-4 animate-pulse" />
            <p className="text-sm md:text-base">{pageInfo.email}</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <MapPinIcon className="text-red-500 h-4 w-4 animate-pulse" />
            <p className="text-sm md:text-base">{pageInfo.address}</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-72 md:w-96 mx-auto"
        >
          <input
            {...register("name", { required: "Preencha seu nome" })}
            placeholder="Nome"
            aria-label="Insira seu nome"
            className={`contactInput ${
              errors.name && `border-2 border-red-700`
            } `}
            type="text"
          />
          {errors.name && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.name.message}
            </p>
          )}
          <input
            {...register("email", {
              required: "Preencha seu email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Digite um email válido",
              },
            })}
            placeholder="Email"
            aria-label="Insira seu email"
            className={`contactInput ${
              errors.email && `border-2 border-red-700`
            } `}
            type="text"
          />
          {errors.email && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.email.message}
            </p>
          )}

          <textarea
            {...register("message", { required: "Digite uma mensagem" })}
            placeholder="Mensagem"
            aria-label="Digite sua mensagem"
            className={`contactInput ${
              errors.message && `border-2 border-red-700`
            } `}
          />
          {errors.message && (
            <p className="text-red-600 font-semibold text-sm">
              {errors.message.message}
            </p>
          )}

          <button
            type="submit"
            aria-label="Enviar email"
            className="flex items-center justify-center bg-red-500 py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-red-500/80 transition-colors"
          >
            {isSubmitting ? <Spinner /> : <span>Enviar</span>}
          </button>
        </motion.form>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 md:right-0 w-[450px] h-[450px] rounded-3xl bg-red-500/10 blur-3xl -z-10"
      />

      <Alert
        isOpen={isEmailAlertOpen}
        status={alertStatusMessage}
        setIsOpen={setIsEmailAlertOpen}
      />
    </div>
  );
}

export default ContactMe;
