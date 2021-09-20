import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amaliyah Robithoh Murid</title>
        <meta name="description" content="Amaliyah Robithoh Murid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="text-center sm:text-left sm:grid sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 gap-4 pb-0 p-5 h-full">
          <div id={styles.banner} className="mb-10 sm:mb-0">
            <img className="w-28 mt-5 sm:m-5" src="/arm.svg" />
            <img className="pl-5 sm:hidden" src="/PNG DEPAN 1.png" />
            <h1 className="text-2xl sm:text-5xl font-bold text-white pl-5 tracking-wide" id={styles.title}>APLIKASI AMALIYAH ROBITHOH MURID</h1>
            <div className="p-4 mt-2 w-full">
              <Link href="#">
                <a>
                  <img className="h-16 hidden sm:block" src="/GOOGLE-PLAY.png" />
                  <div className="w-auto p-4 mx-5 block sm:hidden font-bold tracking-wide" id={styles.downloadBanner} >DOWNLOAD</div>
                </a>
              </Link>
            </div>
          </div>
          <div className="sm:px-10 pt-3 pb-10 lg:pb-0 w-full col-span-2 grid sm:grid-cols-3">
            <div className="flex flex-col items-center justify-end mb-10 sm:mb-44 text-white text-lg text-center tracking-wide">
              <h3 className="hidden sm:block">Banyak <strong>Manfaat</strong></h3>
              <h3 className="hidden sm:block">yang dapat <strong>di Akses</strong></h3>
              <img className="ml-2 sm:hidden" src="/PNG DEPAN 2.png" />
              <h3 className="sm:hidden text-2xl font-bold text-white tracking-wide" style={{marginTop: "-6rem"}}>KINI TAMPIL LEBIH FRESH & MENARIK</h3>
            </div>

            <div className="flex justify-center sm:block">
              <div className="flex flex-col items-center justify-center sm:justify-end sm:mr-5">
                <div className="w-36 h-36 sm:w-32 sm:h-32 flex flex-wrap justify-center items-center sm:p-5 bg-yellow-400 rounded-full">
                  <img className="" src="/PERSON_1_Desktop.png" />
                </div>
                <div className="w-72 hidden sm:block" id={styles.hpMiring}>
                  <img src="/HP_2_Desktop.png" />
                </div>
              </div>
            </div>
            <div>
              <div className="my-5 tracking-wide">
                <h3 className="text-lg text-white">Adab Syekh Mursyid</h3>
                <h3 className="font-bold text-lg text-white">Amaliyah Syekh Mursyid</h3>
                <h3 className="text-lg text-white">& Ke TQN-an</h3>
              </div>
              <div className="row-span-2 flex flex-col items-center justify-center pt-5" id={styles.sholatWrap}>
                <img className="w-52" src="/HP_1_DESKTOP.png" />
                <h3 className="text-lg text-white text-center my-5 mb-0 tracking-wide uppercase sm:capitalized font-bold sm:font-normal" id={styles.sholat}>Tersedia Jadwal <strong>Sholat</strong></h3>
              </div>
            </div>

            <div className="flex justify-center flex-col mb-10 mt-16 sm:hidden">
              <div className="flex justify-center">
                <img src="/BANNER.png" />
              </div>
              <h3 className="text-white font-bold tracking-wide my-10" id={styles.footer}>DOWNLOAD SEKARANG</h3>
              <div className="flex justify-center">
                <img className="h-16 w-auto" src="/GOOGLE-PLAY.png" />
              </div>
            </div>

          </div>
        </div>
      </main>


    </div>
  )
}
