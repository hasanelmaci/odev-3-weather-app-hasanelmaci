import { createContext, useState } from "react";
import styles from "./CityProvider.module.css";

export const CityContext = createContext(null);

function CityProvider({ children }) {
  const [city, setCity] = useState("Izmir");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <CityContext.Provider value={city}>{children}</CityContext.Provider>
      <select name="City" onChange={handleChange}>
        <option value="Izmir">Select City</option>
        <option value="Adana">Adana</option>
        <option value="Adiyaman">Adıyaman</option>
        <option value="Afyonkarahisar">Afyonkarahisar</option>
        <option value="Agri">Ağrı</option>
        <option value="Amasya">Amasya</option>
        <option value="Ankara">Ankara</option>
        <option value="Antalya">Antalya</option>
        <option value="Artvin">Artvin</option>
        <option value="Aydin">Aydın</option>
        <option value="Balıkesir">Balıkesir</option>
        <option value="Bilecik">Bilecik</option>
        <option value="Bingöl">Bingöl</option>
        <option value="Bitlis">Bitlis</option>
        <option value="Bolu">Bolu</option>
        <option value="Burdur">Burdur</option>
        <option value="Bursa">Bursa</option>
        <option value="Çanakkale">Çanakkale</option>
        <option value="Çankırı">Çankırı</option>
        <option value="Çorum">Çorum</option>
        <option value="Denizli">Denizli</option>
        <option value="Diyarbakır">Diyarbakır</option>
        <option value="Edirne">Edirne</option>
        <option value="Elazıg">Elazığ</option>
        <option value="Erzincan">Erzincan</option>
        <option value="Erzurum">Erzurum</option>
        <option value="Eskisehir">Eskişehir</option>
        <option value="Gaziantep">Gaziantep</option>
        <option value="Giresun">Giresun</option>
        <option value="Gumushane">Gümüşhane</option>
        <option value="Hakkari">Hakkâri</option>
        <option value="Hatay">Hatay</option>
        <option value="Isparta">Isparta</option>
        <option value="Mersin">Mersin</option>
        <option value="Istanbul">İstanbul</option>
        <option value="Izmir">İzmir</option>
        <option value="Kars">Kars</option>
        <option value="Kastamonu">Kastamonu</option>
        <option value="Kayseri">Kayseri</option>
        <option value="Kirikkale">Kırklareli</option>
        <option value="Kirsehir">Kırşehir</option>
        <option value="Kocaeli">Kocaeli</option>
        <option value="Konya">Konya</option>
        <option value="Kutahya">Kütahya</option>
        <option value="Malatya">Malatya</option>
        <option value="Manisa">Manisa</option>
        <option value="Kahramanmaras">Kahramanmaraş</option>
        <option value="Mardin">Mardin</option>
        <option value="Mugla">Muğla</option>
        <option value="Mus">Muş</option>
        <option value="Nevsehir">Nevşehir</option>
        <option value="Nigde">Niğde</option>
        <option value="Ordu">Ordu</option>
        <option value="Rize">Rize</option>
        <option value="Sakarya">Sakarya</option>
        <option value="Samsun">Samsun</option>
        <option value="Siirt">Siirt</option>
        <option value="Sinop">Sinop</option>
        <option value="Sivas">Sivas</option>
        <option value="Tekirdag">Tekirdağ</option>
        <option value="Tokat">Tokat</option>
        <option value="Trabzon">Trabzon</option>
        <option value="Tunceli">Tunceli</option>
        <option value="Sanliurfa">Şanlıurfa</option>
        <option value="Usak">Uşak</option>
        <option value="Van">Van</option>
        <option value="Yozgat">Yozgat</option>
        <option value="Zonguldak">Zonguldak</option>
        <option value="Aksaray">Aksaray</option>
        <option value="Bayburt">Bayburt</option>
        <option value="Karaman">Karaman</option>
        <option value="Kirikkale">Kırıkkale</option>
        <option value="Batman">Batman</option>
        <option value="Sirnak">Şırnak</option>
        <option value="Bartin">Bartın</option>
        <option value="Ardahan">Ardahan</option>
        <option value="Igdir">Iğdır</option>
        <option value="Yalova">Yalova</option>
        <option value="Karabuk">Karabük</option>
        <option value="Kilis">Kilis</option>
        <option value="Osmaniye">Osmaniye</option>
        <option value="Duzce">Düzce</option>
      </select>
    </div>
  );
}

export default CityProvider;
