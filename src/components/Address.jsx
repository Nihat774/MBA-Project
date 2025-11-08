function Address() {
    return (
        <div className="-mx-10 md:-mx-20">
            <h2 className="text-4xl font-bold py-8 text-center">Address</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.637972509808!2d49.851015315378616!3d40.37719417936992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0cdbb11a05%3A0x2f5e7c20b3a3fa5d!2sBaku!5e0!3m2!1sen!2saz!4v1696500043439!5m2!1sen!2saz"
                className="w-full h-[50vh] md:h-screen border-none"
                allowFullScreen=""
                loading="lazy"
                title="Baku Map"
            />

        </div>
    )
}

export default Address