import React from "react";
import './style.css';

const Home = () => {
    return (
        <>
            <div className="hero">
                <video muted autoPlay src="./Betawi_.mp4" style={{ width: "100vw" }}></video>
                <div className="overlay">
                    <div className="text">
                        <h1>EXPLORE BETAWI</h1>
                        <p>Semangat Betawi, Jantung Jakarta</p>
                    </div>
                </div>
            </div>

            <div className="section">
                <h1>SEJARAH BETAWI</h1>
                <img src="/images/tanjido.jpeg" alt="Sejarah Betawi" />
                <p>Suku Betawi, yang menghuni wilayah Jakarta dan sekitarnya, merupakan hasil perpaduan berbagai etnis yang datang ke Batavia (nama lama Jakarta) sejak abad ke-17. Masyarakat Betawi adalah keturunan dari beragam kelompok etnis seperti Melayu, Arab, Tionghoa, India, Bali, Bugis, Sunda, dan Eropa yang datang sebagai pedagang, tentara, atau pekerja selama masa kolonial Belanda. Budaya Betawi mencerminkan campuran unik ini, terlihat dalam bahasa, musik, tarian, kuliner, dan adat istiadat mereka.</p>
            </div>

            <div className="tarian" id="tari">
                <h1>TARIAN KHAS BETAWI</h1>
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/bZ5TBX-PL0w?autoplay=1&si=B_YyQYIGBlq9oTF2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ marginLeft: "15.5vw" }}></iframe>
                <h1 style={{textAlign: 'center', marginTop: '50px', paddingBottom: '20px'}}>Tari Yapong</h1>
                <video muted autoPlay src="./Tari Yapong.mp4" style={{width : '50vw', marginLeft: '17vw'}}></video>
                <p style={{textAlign:'center', paddingTop:'10px'}}>Tari Yapong adalah salah satu tarian tradisional dari Betawi yang berasal dari Jakarta. Tarian ini pertama kali diciptakan pada tahun 1975 oleh seorang koreografer bernama Bagong Kussudiardja sebagai bagian dari perayaan ulang tahun kota Jakarta yang ke-448. Tari Yapong bukan hanya sekadar tarian hiburan, tetapi juga merupakan ekspresi budaya dan identitas masyarakat Betawi. Gerakan dalam Tari Yapong sangat dinamis dan enerjik, mencerminkan semangat dan keceriaan masyarakat Betawi. Tarian ini biasanya diiringi oleh musik tradisional Betawi yang meriah dan ceria, serta menggunakan kostum yang berwarna-warni dan menarik. Nama "Yapong" sendiri diambil dari suara "ya" dan "pong" yang sering diucapkan oleh penari dan penonton sebagai bentuk interaksi selama pertunjukan berlangsung. Tarian ini sering ditampilkan dalam berbagai acara budaya dan pariwisata sebagai simbol kekayaan budaya Betawi yang terus dijaga dan dilestarikan.</p>
                <h1 style={{textAlign: 'center', marginTop: '50px', paddingBottom: '20px'}}>Tari Topeng Gong</h1>
                <video muted autoPlay src="./Tarian.mp4" style={{width : '50vw', marginLeft: '17vw'}}></video>
                <p style={{textAlign:'center', paddingTop:'10px'}}>Tari Topeng Gong adalah salah satu tarian tradisional yang berasal dari masyarakat Betawi di Jakarta. Tarian ini dikenal karena penggunaan topeng yang beragam, masing-masing mewakili karakter dan emosi yang berbeda. Topeng-topeng tersebut biasanya menampilkan wajah-wajah yang ekspresif, mulai dari yang lucu hingga yang menyeramkan, mencerminkan berbagai aspek kehidupan manusia. Musik pengiring Tari Topeng Gong menggunakan alat musik tradisional seperti gong, gamelan, dan kendang, menciptakan irama yang khas dan dinamis. Gerakan tarian ini penuh energi dan variasi, menggambarkan cerita-cerita rakyat atau legenda Betawi dengan cara yang menarik dan menghibur. Tari Topeng Gong tidak hanya berfungsi sebagai sarana hiburan, tetapi juga sebagai media pendidikan yang mengajarkan nilai-nilai moral dan budaya kepada penonton. Tarian ini sering ditampilkan dalam berbagai acara budaya, festival, dan upacara adat, memperkuat identitas dan warisan budaya Betawi.</p>
                <a href="https://www.traveloka.com/id-id/explore/destination/mengenal-kebudayaan-betawi-acc/84105">See More Here!</a>
            </div>

            <div className="makanan" id="makan">
                <h1>MAKANAN-MAKANAN KHAS BETAWI</h1>
                <div className="gambar_makanan">
                    <div className="image-container">
                        <a href="https://youtu.be/gw3GXfvJjfA?si=fxR8mPLr1vT2BrSk"><img src="/images/sotobetawi.png" alt="Soto Betawi" /></a>
                        <div className="overlay">Soto Betawi</div>
                    </div>
                    <div className="image-container">
                        <a href="https://youtu.be/Ab6zg-plwzI?si=-x5kc1BcVV01DuOi"><img src="/images/Kerak Telor _ Resep dari Dapur KOBE.jpeg" alt="Kerak Telor" /></a>
                        <div className="overlay">Kerak Telor</div>
                    </div>
                    <div className="image-container">
                        <a href="https://www.youtube.com/watch?v=aCezawMmDfo"><img  src="/images/Dibisikin Sama Pedagang Gado-gado Langganan, Begini Cara Bikin Saus Kacang yang Gurih Sampai Bikin Ketagihan - Sajian Sedap.jpeg" alt="Gado-gado" /></a>
                        <div className="overlay">Gado-gado</div>
                    </div>
                </div>
                <p>Betawi, suku asli yang menghuni wilayah Jakarta, memiliki kekayaan kuliner yang luar biasa beragam dan lezat. Berbagai makanan khas Betawi merupakan hasil perpaduan budaya dari berbagai etnis yang pernah menetap di Jakarta, seperti Melayu, Tionghoa, Arab, dan Belanda. Soto Betawi, dengan kuah santan yang kaya dan daging yang empuk, adalah salah satu hidangan yang terkenal. Kerak telor, yang dibuat dari ketan putih, telur, dan serundeng, sering menjadi bintang di acara-acara festival. Selain itu, gado-gado dengan saus kacang yang menggugah selera, adalah contoh lain dari kelezatan kuliner Betawi. Keanekaragaman ini tidak hanya mencerminkan kekayaan budaya dan sejarah Betawi, tetapi juga membuatnya menjadi daya tarik kuliner yang wajib dicoba.</p>
            </div>

            <footer>
                <h1> @2024 All Right Reserved.</h1>
                
            </footer>
        </>
    );
};

export default Home;
