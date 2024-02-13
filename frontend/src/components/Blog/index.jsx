import Item from "./item"
import './style.scss'
import Footer from "../Footer/";
import geolocationImg from '../../assets/icons/geolocation.png'
import calendarImg from '../../assets/icons/calendar.png'
import peopleImg from '../../assets/icons/people.png'
import tourImg from '../../assets/images/Rectangle 40.png'

import frame from '../../assets/icons/frame-1.png'
import time from '../../assets/icons/time 1.png'
import LikeImg from '../../assets/icons/Vector-2.png'
import { Link, useNavigate } from "react-router-dom";
function Blog() {
     const navigate = useNavigate()

     const goToTeamsHash = () => {
         navigate('/blog')
 
     }
     return (
          <div className="blog-container">
               <div className="navbar-item">
                    <Item />
               </div>
               <div className="small-text">
                    <span className="span" id="span-1">
                         На ишаке
                    </span>
                    <span className="span">
                         Пешком
                    </span>
                    <span className="span">
                         На велике
                    </span>
                    <span className="span">
                         Как хотите
                    </span> 
               </div>
               <div className="blog-wrapper">
                    <div className="input-btn">
                         <div className="input">
                              <input type="text" name="" value={"Самарканд"} id="county" />
                              <img src={geolocationImg} alt="" width={23} height={28} />
                         </div>
                         <div className="input">
                              <input type="text" name="" value={"2005-05-05"} id="date" />
                              <img src={calendarImg} alt="" width={23} height={23} />
                         </div>
                         <div className="input">
                              <input type="text" name="" id="people" value={"1 человек"} />
                              <img src={peopleImg} alt="" width={23} height={23} />
                         </div>
                         <button className="info-btn">Показать</button>
                    </div>
               </div>

               <div className="our-blogs">

                    <div className="second-container">
                         <h2>Фильтры</h2>
                         <div className="grid-div">

                              <div className="price">
                                   <div className="header">
                                        <h3>Стоимость</h3> <span>-</span>
                                   </div>
                                   <div className="input">
                                        <input type="text" value={"5.600 сум"} />
                                        <input type="text" value={'5.600 сум'} />
                                   </div>
                                   <input className="range" type="range" />
                                   <hr />
                              </div>
                              <div className="people">
                                   <div className="header">
                                        <h3>Количество</h3> <span>-</span>
                                   </div>
                                   <div className="div">
                                        <input type="text" value={"1 чел."} />
                                        <input type="text" value={"2 чел."} />
                                        <input type="text" value={"3 чел."} />
                                        <input type="text" value={"4 чел."} />
                                        <input type="text" value={"5 чел."} />
                                        <input type="text" value={"6 чел."} />
                                        <input type="text" value={"7 чел."} />
                                        <input type="text" value={"8 чел."} />
                                        <input type="text" value={"9 чел."} />
                                        <input type="text" value={"10 чел."} />
                                        <input type="text" value={"10+ чел."} />
                                   </div>
                              </div>
                              <div className="radio-input">
                                   <hr />
                                   <div className="header">
                                        <h3>Место</h3> <span>-</span>
                                   </div>
                                   <div>
                                        <input type="checkbox" name="city" checked />
                                        <label ></label>
                                   </div>
                                   <div>
                                        <input type="checkbox" />
                                        <label >Америка через Мексико</label>
                                   </div>
                                   <div>
                                        <input type="checkbox" />
                                        <label >Самарканд</label>
                                   </div>
                                   <div>
                                        <input type="checkbox" />
                                        <label >Жизах</label>
                                   </div>
                                   <div>
                                        <input type="checkbox" />
                                        <label >Москва </label>
                                   </div>
                                   <hr />
                              </div>
                              <div className="header-bottom">
                                   <h3>Длительность</h3> <span>+</span>
                              </div>
                              <hr />
                              <div className="header-bottom">
                                   <h3>Дата</h3> <span>+</span>
                              </div>
                              <hr />
                              
                         </div>
                    </div>

                    <div className="first-container">
                         <h2>OUR TOURS</h2>
                         <div className="content">
                              <img src={tourImg} width={250} alt="" />
                              <div className="information">

                                   <div className="header-content">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   </div>
                                   <div className="price-content">
                                        <div><span><img src={frame} alt="" /></span>1618$</div>
                                        <div><span><img src={frame} alt="" /></span>1412$</div>
                                        <div><span><img src={time} alt="" /></span>2,5 hours</div>
                                   </div>

                                   <div className="text-content">
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>
                                   <div className="button-and-like">
                                        <Link onClick={goToTeamsHash} to={'/third'}>
                                        <button className="button">Подробнее</button>
                                        </Link>
                                        <button className="like"><img src={LikeImg} alt="" /></button>
                                   </div>
                              </div>
                         </div>

                         <div className="content">
                              <img src={tourImg} width={250} alt="" />
                              <div className="information">

                                   <div className="header-content">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   </div>
                                   <div className="price-content">
                                        <div><span><img src={frame} alt="" /></span>1618$</div>
                                        <div><span><img src={frame} alt="" /></span>1412$</div>
                                        <div><span><img src={time} alt="" /></span>2,5 hours</div>
                                   </div>

                                   <div className="text-content">
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>
                                   <div className="button-and-like">
                                   <Link onClick={goToTeamsHash} to={'/third'}>
                                        <button className="button">Подробнее</button>
                                   </Link>
                                        <button className="like"><img src={LikeImg} alt="" /></button>
                                   </div>
                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} alt="" />
                              <div className="information">

                                   <div className="header-content">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   </div>
                                   <div className="price-content">
                                        <div><span><img src={frame} alt="" /></span>1618$</div>
                                        <div><span><img src={frame} alt="" /></span>1412$</div>
                                        <div><span><img src={time} alt="" /></span>2,5 hours</div>
                                   </div>

                                   <div className="text-content">
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>
                                   <div className="button-and-like">
                                        <button className="button">Подробнее</button>
                                        <button className="like"><img src={LikeImg} alt="" /></button>
                                   </div>
                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} alt="" />
                              <div className="information">

                                   <div className="header-content">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   </div>
                                   <div className="price-content">
                                        <div><span><img src={frame} alt="" /></span>1618$</div>
                                        <div><span><img src={frame} alt="" /></span>1412$</div>
                                        <div><span><img src={time} alt="" /></span>2,5 hours</div>
                                   </div>

                                   <div className="text-content">
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>
                                   <div className="button-and-like">
                                        <button className="button">Подробнее</button>
                                        <button className="like"><img src={LikeImg} alt="" /></button>
                                   </div>
                              </div>
                         </div>
                         <div className="content">
                              <img src={tourImg} width={250} alt="" />
                              <div className="information">

                                   <div className="header-content">
                                        <span>Автобусный тур</span>
                                        <br />
                                        <b>Золотое кольцо Абхазии (из Адлера)</b>
                                   </div>
                                   <div className="price-content">
                                        <div><span><img src={frame} alt="" /></span>1618$</div>
                                        <div><span><img src={frame} alt="" /></span>1412$</div>
                                        <div><span><img src={time} alt="" /></span>2,5 hours</div>
                                   </div>

                                   <div className="text-content">
                                        <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...</p>
                                   </div>
                                   <div className="button-and-like">
                                        <button className="button">Подробнее</button>
                                        <button className="like"><img src={LikeImg} alt="" /></button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="footer">
                    <Footer />
               </div>
          </div>
     );

}
export default Blog;