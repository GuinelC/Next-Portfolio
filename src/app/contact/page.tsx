// app/contact/page.tsx
export default function Contact() {
    return (
      <main className="">
        <h1 className="text-4xl font-bold text-center">Contactez-nous</h1>
        <p className="text-lg text-center mt-4">
          Si vous avez des questions, n&apos;hésitez pas à nous contacter via le formulaire ci-dessous.
        </p>
  
        {/* Formulaire de contact (simple) */}
        <form className="max-w-lg mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </main>
    );
  }
  