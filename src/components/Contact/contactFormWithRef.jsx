import React, { useRef, useState } from "react";
import ModalContact from "./modalContact";

const ContactFormWithRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nom:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Message:", messageRef.current.value);
    setModalVisible(true);
    // Envoyer les données à un serveur ici
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameRef}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md   
 shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          className="mt-1 p-2   
 w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          ref={messageRef}
          className="mt-1 p-2   
 w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium   
 text-white hover:bg-gray-900"
      >
        Envoyer
      </button>
      {modalVisible && (
        <ModalContact
          setModalVisible={setModalVisible}
          form={{
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
          }}
        />
      )}
    </form>
  );
};

export default ContactFormWithRef;
