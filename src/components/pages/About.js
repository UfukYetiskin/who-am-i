import React from "react";
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub'
import {GrLinkedin} from '@react-icons/all-files/gr/GrLinkedin'
import {AiFillTwitterCircle} from '@react-icons/all-files/ai/AiFillTwitterCircle'
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram'
function About() {
  return (
    <div>
      <div>
        <img
          style={{ width: "70%" }}
          src="https://www.linkpicture.com/q/WhatsApp-Image-2022-01-09-at-22.54.08.jpeg"
          alt="imageof-Ufuk"
        />
      </div>
      <div style={{display : 'flex', flexDirection : 'row', width : '70%', margin : 'auto', fontSize : '12px', }}>
        <div style={{width : '50%' , textAlign : 'center', borderRight : '1px solid silver', paddingRight :'1%'}}>
          <p>
            Ben deniz Ufuk Yetişkin, ha oyunlardaki takma adımı sorarsanız o
            'reikotaka'. 1995 yılında Diyarbakır'da dünyaya geldim. Geçim derdi
            ile babamın iş bulma arayışından sonra Kocaeli'ye bebek sayılacak
            yaşta temelli taşındık.
          </p>
          <p>
            Lise eğitimimi İzmit Endüstri Meslek Lisesi'nde Elektrik ve
            Elektronik Bölümü'nde tamamladım. Ardından üniversiteye gitmek için
            uzunca hazırlanma sürecim oldu. Pamukkale Üniversitesi, Yönetim
            Bilişim Sistemleri Bölümü'nü kazanmam ile yazılım ile tanıştım.
          </p>
          <p>
            Lisans eğitimim boyunca yazılım alanında, finans, yönetim ve
            pazarlama alanlarında çeşitli dersler aldım. Bu alanlar arasında
            yazılım öğrenmek ve bir şeyler denemek ilgimi çekti ve kariyerimi bu
            yönde ilerletme kararı aldım.
          </p>
        </div>
        <div style={{width : '50%' , textAlign : 'center'}}>
          <p>
            Lisans eğitimim sırasında Erasmus+ Programı ile Varşova'da 6 ay
            bulundum ve küçük bir Avrupa gezisi yapma fırsatı buldum.
          </p>
          <p>
            Bu arada beni hırslandıran ve her zaman arkamda olan sevgili kız
            arkadaşım Ümmühan Gümüş'e ve bana her zaman saygı duyan aileme çok
            teşekkür ederim. Sizleri çok seviyorum.
          </p>
        </div>
      </div>
      <hr style={{margin:  '5%'}} />
      <div>
        <h3>Sosyal Medya Hesaplarım</h3>
        <ul style={{display : 'flex', listStyleType  :'none', justifyContent :'center'}}>
          <li style={{margin : '1%',textDecoration :'none'}}><a style={{textDecoration :'none'}} href="https://github.com/UfukYetiskin"><AiFillGithub/></a></li>
          <li style={{margin : '1%'}}><a style={{textDecoration :'none'}} href="https://www.linkedin.com/in/ufuk-yetiskin-1b016b18b/"><GrLinkedin/></a></li>
          <li style={{margin : '1%'}}><a style={{textDecoration :'none'}} href="https://twitter.com/YetiskinU"><AiFillTwitterCircle/></a></li>
          <li style={{margin : '1%'}}><a style={{textDecoration :'none'}} href="https://www.instagram.com/harut__marut/?hl=tr"><AiFillInstagram/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
