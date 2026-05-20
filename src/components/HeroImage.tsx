import logo from "../../public/david_iweala.jpg";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src="/david_iweala.png"
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
        />
        </>
    )
}
export default HeroImage