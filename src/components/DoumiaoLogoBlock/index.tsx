import Link from "next/link";

export function DoumiaoLogoBlock() {
  return (
    <div className="logo-block" aria-label="豆苗兔子 Logo">
      <Link href="/" aria-label="回到首页">
        <img
          src="/assets/doumiao/doumiao-logo.png"
          alt="豆苗"
          style={{
            width: "68%",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
        />
      </Link>
    </div>
  );
}
