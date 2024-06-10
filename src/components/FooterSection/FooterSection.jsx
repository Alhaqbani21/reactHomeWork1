import './FooterSection.css';
function FooterSection() {
  return (
    <footer>
      <div className="sectionFooter">
        <ul>
          <li>
            <img
              className="logoFooter"
              src="https://tuwaiq.edu.sa/img/logos/logo.svg"
              alt=""
            />
          </li>
          <li>
            <div>
              <a href="">شارك كمدرب </a>
              <br />
              <a href="">حول الأكادمية </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">الشروط والأحكام</a>
              <br />
              <a href="">سياسة الخصوصية</a>
            </div>
          </li>
          <li>
            <div className="socialIcons">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/tuwaiqacademy"
              >
                <img
                  src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://www.snapchat.com/add/tuwaiqacademy"
                target="_blank"
              >
                <img
                  src="https://tuwaiq.edu.sa/icons/snapchat-icon.svg"
                  alt="snapchat"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC_pOwgeaVK7bg3z7fJB5N8w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tuwaiq.edu.sa/icons/youtube-icon.svg"
                  alt="youtube"
                />
              </a>
              <a
                href="https://x.com/TuwaiqAcademy?mx=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tuwaiq.edu.sa/icons/twitter-icon.svg"
                  alt="twitter"
                />
              </a>
              <a
                href="https://discord.com/invite/DWpUH7wFxj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tuwaiq.edu.sa/icons/discord-icon.svg"
                  alt="discord"
                />
              </a>
            </div>
            <h4 dir="ltr">@TuwaiqAcademy</h4>
          </li>
          <li>
            <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="" />
          </li>
        </ul>
      </div>
      <h3>جميع الحقوق محفوظة لأكادمية طويق 2024</h3>
    </footer>
  );
}

export default FooterSection;
