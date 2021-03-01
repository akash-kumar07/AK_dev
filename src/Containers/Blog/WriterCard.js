// @flow
import * as React from 'react';
import style from './Blog.module.css'
export function WriterCard() {
  return (
    <>
                      <div className={style.cardDetail_writerblock}>
                   <div >
                      <div className={style.cardDetail_writer_pic}>
                          <img src={pic}/>
                      </div>
                      <div className={style.cardDetail_no_of_post}>
                          14 posts
                      </div>
                   </div>
                   <div>
                       <div>{blogDetail?.writer?.name}</div>
                       <div>{blogDetail?.writer?.designation}</div>
                       <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. invidunt ut labore et.</div>
                       <div className={style.cardDetail_writerblock_social_icons}>
                         <div>
                            <img  src={f} alt="Eikonha" />
                         </div>
                         <div >
                            <img src={l} alt="Eikonha" />
                         </div>
                         <div >
                            <img src={t} alt="Eikonha" />
                         </div>
                       </div>
                   </div>
                  
                </div>
    </>
  );
};