import { contact } from "@/data/contact";

export function ContactPanel() {
  return (
    <div className="contact-panel">
      <article className="contact-block">
        <span className="contact-block__number" aria-hidden="true">
          01
        </span>
        <div className="contact-block__text">
          <p className="contact-block__eyebrow">EMAIL</p>
          <h2 className="contact-block__title">邮箱</h2>
          <p className="contact-block__description">
            可通过邮箱发送面试邀约、项目合作或 AI 数据岗位相关沟通。
          </p>
        </div>
        <a className="contact-block__action" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </article>

      <article className="contact-block contact-block--wechat">
        <span className="contact-block__number" aria-hidden="true">
          02
        </span>
        {contact.wechatQr ? (
          <img
            className="contact-block__qrcode"
            src={contact.wechatQr}
            alt="微信二维码"
            width={110}
            height={110}
          />
        ) : null}
        <div className="contact-block__text">
          <p className="contact-block__eyebrow">WECHAT</p>
          <h2 className="contact-block__title">微信</h2>
          <p className="contact-block__description">
            扫码联系我，可沟通面试邀约、项目合作、AI 数据岗位相关问题。
          </p>
        </div>
      </article>
    </div>
  );
}
