import React, { useState } from "react";
import "./Donate.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaCheckCircle } from "react-icons/fa";

function Donate() {
  const [donateType, setDonateType] = useState("ferdi");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    amount: "",
    company: "",
    fullname: "",
    fin: "",
    phone: "",
    email: "",
  });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: bütün inputlar doldurulubmu?
    if (
      !form.amount ||
      (donateType === "korporativ" && !form.company) ||
      !form.fullname ||
      !form.fin ||
      !form.phone ||
      !form.email
    ) {
      setFail(true);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setFail(false);
  };

  // Uğursuz ödəniş görünüşü
  if (fail) {
    return (
      <div className="donate-form-container fail">
        <img
          src="/fail-icon.png"
          alt="Ödəniş uğursuzdur"
          className="donate-logo"
        />
        <h2 className="donate-title">Ödəniş uğursuzdur</h2>
        <div className="donate-fail-text">
          Təəssüf ki, ödəniş baş tutmamışdır.
          <br />
          Xahiş edirik, hesabınızın balansını yoxlayın və ya ətraflı məlumat
          üçün bankınızla əlaqə saxlayın.
        </div>
        <button
          className="donate-submit-btn"
          onClick={() => setFail(false)}
          style={{ marginTop: 24 }}
        >
          Bir daha cəhd et
        </button>
        <div className="donate-or-text">və ya</div>
        <div className="donate-footer-text">Köçürmə üsulu ilə ödəniş et</div>
      </div>
    );
  }

  // Uğurlu ödəniş görünüşü
  if (success && !showReceipt) {
    return (
      <div className="donate-form-container">
        <img src="/logo.png" alt="Bizim Mətbəx" className="donate-logo" />
        <h2 className="donate-title">Ödəniş uğurludur!</h2>
        <div className="donate-success-table">
          <div>
            <span>Məbləğ</span>
            <span>
              <b>{form.amount} AZN</b>
            </span>
          </div>
          {donateType === "korporativ" && (
            <div>
              <span>Şirkətin adı</span>
              <span>
                <b>{form.company}</b>
              </span>
            </div>
          )}
          <div>
            <span>Ad və Soyad</span>
            <span>
              <b>{form.fullname}</b>
            </span>
          </div>
          <div>
            <span>Mobil nömrə</span>
            <span>
              <b>{form.phone}</b>
            </span>
          </div>
          <div>
            <span>E-poçt ünvanı</span>
            <span>
              <b>{form.email}</b>
            </span>
          </div>
        </div>
        <button
          className="donate-submit-btn"
          style={{ margin: "24px auto 0 auto", width: 240 }}
          onClick={() => setShowReceipt(true)}
        >
          Qəbzi göstər
        </button>
        <div className="donate-success-share-text">
          Paylaşın, daha çox insan qoşulsun:
        </div>
        <div className="donate-success-socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </div>
    );
  }

  // Qəbz görünüşü
  if (success && showReceipt) {
    const receiptText = `
        Beneficiary name: NUMUNA BIZIM MATBAX PUBLIK HUQUQI SAXSI
        Beneficiary account: AZ25IBAZ40190018108300377204
        Beneficiary account currency: AZN
        Beneficiary bank: Azərbaycan Beynəlxalq Bankı ASC
        SWIFT Code: IBAZAZ2X
        Correspondent Accounts:
        International Bank of Azerbaijan – Moscow, IBAZRUMM, 30111810500000000001
        Transkapitalbank – Moscow, TJSCRUMM, 30111810200000000176
        AO Raiffeisen – Moscow, RZBMRUMM, 30111810400000000051
        Bank Code: 805722
        Bank Tax ID: 9900001881
        Customer Tax ID: 0987654321
        Customer ID: 0029190
    `.trim();

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(receiptText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        setCopied(false);
      }
    };

    return (
      <div className="donate-form-container receipt-modal">
        <button
          className="donate-modal-close"
          onClick={() => setShowReceipt(false)}
          aria-label="Bağla"
        >
          ×
        </button>
        <h2 className="donate-title" style={{ marginTop: 0 }}>
          Bank rekvizitləri
        </h2>
        <div className="receipt-content">
          <div className="receipt-row">
            <span className="receipt-label">
              Beneficiary name (Alan tərəfin adı)
            </span>
            <span className="receipt-value">
              NÜMUNƏ BİZİM MƏTBƏX PUBLIK HUQUQİ 
            </span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">
              Beneficiary account (Alan tərəfin hesab nömrəsi, IBAN)
            </span>
            <span className="receipt-value">AZ25IBAZ40190018108300377204</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">
              Beneficiary account currency (Alan tərəfin hesab valyutası)
            </span>
            <span className="receipt-value">AZN</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Beneficiary bank (Alan Bank)</span>
            <span className="receipt-value">
              Azərbaycan Beynəlxalq Bankı ASC
            </span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">
              SWIFT Code (Alan Bankın SWIFT kodu)
            </span>
            <span className="receipt-value">IBAZAZ2X</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">
              Correspondent Accounts (Alan Bankın müxbir hesabları)
            </span>
            <span className="receipt-value">
              International Bank of Azerbaijan – Moscow, IBAZRUMM,
              30111810500000000001
              <br />
              Transkapitalbank – Moscow, TJSCRUMM, 30111810200000000176
              <br />
              AO Raiffeisen – Moscow, RZBMRUMM, 30111810400000000051
            </span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Bank Code (Alan Bankın kodu)</span>
            <span className="receipt-value">805722</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Bank Tax ID (Bankın VÖEN-i)</span>
            <span className="receipt-value">9900001881</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">
              Customer Tax ID (Alan tərəfin VÖEN-i)
            </span>
            <span className="receipt-value">0987654321</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">
              Customer ID (Alan tərəfin identifikasiya nömrəsi)
            </span>
            <span className="receipt-value">0029190</span>
          </div>
        </div>
        <button
          className="donate-submit-btn"
          style={{ marginTop: 24, width: 240 }}
          onClick={handleCopy}
        >
          Məlumatları kopyala
        </button>
        {copied && (
          <div className="copied-message">
            <FaCheckCircle
              color="#27ae60"
              style={{ marginRight: 6, verticalAlign: "middle" }}
            />
            Məlumatlar kopyalandı!
          </div>
        )}
      </div>
    );
  }

  // Əsas form görünüşü
  return (
    <div className="donate-form-container">
      <img src="/logo.png" alt="Bizim Mətbəx" className="donate-logo" />
      <h2 className="donate-title">Dəstək ol</h2>
      <form className="donate-form" onSubmit={handleSubmit}>
        <label className="donate-label" htmlFor="amount">
          Məbləğ
        </label>
        <div className="donate-amount-row">
          <input
            type="number"
            id="amount"
            name="amount"
            className="donate-amount-input"
            placeholder="0.00"
            min="1"
            step="0.01"
            value={form.amount}
            onChange={handleChange}
          />
          <span className="donate-amount-currency">AZN</span>
        </div>
        <div className="donate-amount-buttons">
          <button
            type="button"
            className="donate-amount-btn"
            onClick={() => setForm({ ...form, amount: "25" })}
          >
            25 AZN
          </button>
          <button
            type="button"
            className="donate-amount-btn"
            onClick={() => setForm({ ...form, amount: "50" })}
          >
            50 AZN
          </button>
          <button
            type="button"
            className="donate-amount-btn"
            onClick={() => setForm({ ...form, amount: "100" })}
          >
            100 AZN
          </button>
        </div>
        <div className="donate-type-toggle">
          <button
            type="button"
            className={`donate-type-btn${
              donateType === "ferdi" ? " active" : ""
            }`}
            onClick={() => setDonateType("ferdi")}
          >
            Fərdi
          </button>
          <button
            type="button"
            className={`donate-type-btn${
              donateType === "korporativ" ? " active" : ""
            }`}
            onClick={() => setDonateType("korporativ")}
          >
            Korporativ
          </button>
        </div>
        {donateType === "korporativ" && (
          <>
            <label className="donate-label" htmlFor="company">
              Şirkətin adı
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="donate-input"
              value={form.company}
              onChange={handleChange}
            />
          </>
        )}
        <label className="donate-label" htmlFor="fullname">
          Ad və soyadınız
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="donate-input"
          value={form.fullname}
          onChange={handleChange}
        />
        <label className="donate-label" htmlFor="fin">
          FİN
        </label>
        <div className="donate-input-icon-row">
          <input
            type="text"
            id="fin"
            name="fin"
            className="donate-input"
            value={form.fin}
            onChange={handleChange}
          />
          <span className="donate-info-icon" title="FİN nədir?">
            i
          </span>
        </div>
        <label className="donate-label" htmlFor="phone">
          Mobil nömrəniz
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="donate-input"
          placeholder="+994"
          value={form.phone}
          onChange={handleChange}
        />
        <label className="donate-label" htmlFor="email">
          E-poçt ünvanınız
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="donate-input"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit" className="donate-submit-btn">
          Təhlükəsiz ödəniş et
        </button>
      </form>
      <div className="donate-footer-text">
        Köçürmə üsulu ilə ödəmək istəyirsiniz?
      </div>
      <div className="donate-payment-info">
        <span>Ödənişlər üzrə tərəfdaş:</span>
        <img
          src="/pasha-bank.png"
          alt="PAŞA Bank"
          className="donate-bank-logo"
        />
      </div>
    </div>
  );
}

export default Donate;
