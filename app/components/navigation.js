import Link from "next/link";

export default function Navigation() {
  
  return (
    <>
      <div className="Menu">
        <Link href="/">ES</Link>
        <Link href="/cx">CX</Link>
        <Link href="/rest-api">API</Link>
      </div>
      
    </>
  )
}
