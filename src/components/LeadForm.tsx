import React, { useState } from "react";
import { insertUser } from "../service/contact.service";
import { User } from "../interface/User";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#DCFCE7] rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-[#16a34a]">{title}</h2>
        <p className="mt-2 text-gray-700">{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

const ErrorModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FEE2E2] rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-[#B91C1C]">{title}</h2>
        <p className="mt-2 text-gray-700">{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#B91C1C] text-white rounded hover:bg-[#7F1D1D] transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export const LeadForm = () => {
  const [formData, setFormData] = useState<User>({ Nombre: "", Correo: "" });
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await insertUser(formData);

    setIsSubmitting(false);

    if (success) {
      setFormData({ Nombre: "", Correo: "" });
      setSuccessModalOpen(true);
    } else {
      setErrorModalOpen(true);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-green-50 to-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-green-600 text-white p-8 md:p-12">
              <h2 className="text-3xl font-playfair-bold mb-4">
                Únete a nuestra comunidad gastronómica
              </h2>
              <p className="mb-6 font-inter-semibold">
                Recibe más recetas autóctonas como esta directamente en tu
                correo. Descubre los secretos de la gastronomía costarricense
                con Don Pepe y elguche.com.
              </p>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="nombre"
                    className="block text-gray-700 font-inter-semibold mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="Nombre"
                    value={formData.Nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="correo"
                    className="block text-gray-700 font-inter-semibold mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="Correo"
                    value={formData.Correo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-inter-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        title="¡Gracias por suscribirte!"
        message="Pronto recibirás deliciosas recetas en tu correo."
      />

      <ErrorModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title="Error al enviar"
        message="Ocurrió un problema al enviar tus datos. Por favor, intenta de nuevo."
      />
    </section>
  );
};
