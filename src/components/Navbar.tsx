import Link from "next/link"

const Navbar = () => {
  return (
    <div className="classname">
        {/* LEFT */}
        <div className="">
            <Link href="/">LAMASOCIAL</Link>
        </div>
        {/* CENTER */}
        <div className="hidden">
        </div>
        {/* RIGHT */}
        <div className="classname"></div>
    </div>
  )
}

export default Navbar