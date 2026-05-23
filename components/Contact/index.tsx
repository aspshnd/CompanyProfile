"use client";

const Contact = () => {
  const PHONE_NUMBER = "6282199006464"; 

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Halo, saya *${name}*.\nEmail: ${email}\n\n${message}`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="overflow-hidden pt-0 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                 data-wow-delay=".15s">

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">

                  {/* NAMA */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Nama Anda
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        placeholder="Masukkan nama anda"
                        className="w-full rounded-sm border bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base focus:border-primary outline-none"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="Masukkan email anda"
                        className="w-full rounded-sm border bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base focus:border-primary outline-none"
                      />
                    </div>
                  </div>

                  {/* PESAN */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Pesan Anda
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tulis pesan anda"
                        className="w-full resize-none rounded-sm border bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base focus:border-primary outline-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover"
                    >
                      Kirim via WhatsApp 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* KOLOM KANAN BISA DIISI MAP / INFO ALAMAT */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
