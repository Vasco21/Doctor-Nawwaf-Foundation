import { createGlobalStyle } from 'styled-components';



const normalize = `
/*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
${normalize};
  body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    
  }
  .aboutImage {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .about-description {
    font-size:0.9rem;
    color: #6f6f6f;
  }

  .section-header {
    .section-title {
      font-weight: bold;
      color: #4e4e4e;
      font-family: 'Raleway', sans-serif;
      position: relative;
      margin-bottom: 2rem;
      span {
        color: #248eff;
      }
      &:after {
        content: '';
        content: '';
        display: block;
        height: 3px;
        width: 70px;
        background: #248eff;
        position: absolute;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .section-subtitle {
      font-size: 0.9rem;
      text-align:cernter;
    }
    .section-subtitle span{
      max-width: 700px;
      font-size: 1.2rem;
      color:#0d20cc;
    }
  }
.homes{
  height: calc(100vh - 300px);
    margin-top: 10px;
    position: relative;
    > div {
      height: 100%;
    }
    h5 span{
      color: skyblue;
    }
    .home-contents {
      height: 100%;
      background-position: center;
      background-size: cover;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #003267;
        opacity: 0.7;
      }
      .intros {
        margin-top: 200px;
        position: absolute;
        transform: translateY(-50%);
        position: relative;
        z-index: 2;
        .titles {
          border-radius:10px;
          font-size: 40px;
          font-weight: 800;
          .sub-titles {
            font-weight: normal;
            max-width: 700;
            margin: 0 auto;
            letter-spacing: 1px;
          }
        }
      }
   }
}

@media screen and (max-width:700px){
  .homes{
    margin-top: 20px;
    height: calc(100vh - 300px);
    position: relative;
    }
    > div {
      height:100%;
    }
    .home-contents {
      height: 100%;
      background-position: center;
      background-size: cover;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: #003267;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
      }
      .intros {
        position: relative;
        z-index: 2;
        .title {
          font-weight: bold;
          font-size: 20px;
        }
        .sub-titles {
          font-weight: normal;
          max-width: 700;
          margin: 0 auto;
          letter-spacing: 1.2px;
          font-size:12px;
        }
      }
    }
  }
}
@media screen and (max-width:450px){
  .homes{
    margin-top: 20px;
    height: calc(100vh - 300px);
    position: relative;
    }
    > div {
      height:100%;
    }
    .home-contents {
      height: 100%;
      background-position: center;
      background-size: cover;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: #003267;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
      }
      .intros {
        position: relative;
        z-index: 2;
        .title {
          font-weight: bold;
          font-size: 20px;
        }
        .sub-titles {
          font-weight: normal;
          max-width: 700;
          margin: 0 auto;
          letter-spacing: 1.2px;
          font-size:10px;
        }
      }
    }
  }
}
// homeInsights
.Insights{
  margin-top: 20px;
  height: calc(100vh - 300px);
  position: relative;
  }
  > div {
    height:100%;
  }
  .Insightsco{
    height: 100%;
    background-position: center;
    background-size: cover;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      background-color: #003267;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.7;
    }
    .Insightsintro {
      position: relative;
      z-index: 2;
      .Insightstitle {
        font-weight: bold;
        font-size: 40px;
        border-radius:5px;
      }
      .Insightssub {
        font-weight: normal;
        max-width: 700;
        margin: 0 auto;
        letter-spacing: 1.2px;
      }
    }
  }
}
@media screen and (max-width:830px){
  .Insights{
    margin-top: 20px;
    height: calc(100vh - 300px);
    position: relative;
    }
    > div {
      height:100%;
    }
    .Insightsco{
      height: 100%;
      background-position: center;
      background-size: cover;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: #003267;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
      }
      .Insightsintro {
        position: relative;
        z-index: 2;
        .Insightstitle {
          font-weight: bold;
          font-size: 20px;
        }
        .Insightssub {
          font-weight: normal;
          max-width: 400;
          margin: 0 auto;
          letter-spacing: 1px;
          font-size:15px;
        }
      }
    }
  }
}
/////
@media screen and (max-width:700px){
  .Insights{
    margin-top: 20px;
    height: calc(100vh - 300px);
    position: relative;
    }
    
    > div {
      height:100%;
    }
   
    .Insightsco{
      height: 100%;
      background-position: center;
      background-size: cover;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: #003267;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
      }
      .Insightsintro {
        position: relative;
        z-index: 2;
        .Insightstitle {
          font-weight: bold;
          font-size: 30px;
        }
        .Insightssub {
          font-weight: normal;
          max-width: 700;
          margin: 0 auto;
          letter-spacing: 1.2px;
          font-size:13px;
        }
      }
    }
  }
}
@media screen and (max-width:550px){
    .Insightsco{
      height: 100%;
      background-position: center;
      background-size: cover;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: #003267;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
      }
      .Insightsintro {
        margin-top:10px;
        position: relative;
        z-index: 2;
        .Insightstitle {
          font-weight: bold;
        }
        .Insightssub {
          max-width: 600;
          margin: 0 auto;
          letter-spacing: 1px;
          font-size:12px;
        }
      }
    }
  }
}
//
@media screen and (max-width:500px){
  .Insightsco{
    height: 100%;
    background-position: center;
    background-size: cover;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      background-color: #003267;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.7;
    }
    .Insightsintro {
      margin-top:0px;
      position: relative;
      z-index: 2;
      .Insightstitle {
        font-weight: bold;

      }
      .Insightssub {
        max-width: 600px;
        margin: 0 auto;
        letter-spacing: 1px;
        font-size:11px;
      }
    }
  }
}
}
@media screen and (max-width:400px){
  .Insightsco{
    height: 100%;
    background-position: center;
    background-size: cover;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      background-color: #003267;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.7;
    }
    .Insightsintro {
      margin-top:0px;
      position: relative;
      z-index: 2;
      .Insightstitle {
        font-weight: bold;

      }
      .Insightssub {
        max-width: 600px;
        margin: 0 auto;
        letter-spacing: 1px;
        font-size:8px;
      }
    }
  }
}
}

//

@media screen and (max-width:450px){
  .header{
    display: none;
  }
  .none{
    .sub-title {
      display: none;
    }
  }

}
 
.gradient__bg{
  /* ff 3.6+ */
  background:-moz-linear-gradient(90deg, rgba(110, 90, 33, 1) 0%, rgba(140, 134, 82, 1) 100%); 

  /* safari 5.1+,chrome 10+ */
  background:-webkit-linear-gradient(90deg, rgba(110, 90, 33, 1) 0%, rgba(140, 134, 82, 1) 100%);

  /* opera 11.10+ */
  background:-o-linear-gradient(90deg, rgba(110, 90, 33, 1) 0%, rgba(140, 134, 82, 1) 100%);

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8C8652', endColorstr='#6E5A21', GradientType=0 );

  /* ie 10+ */
  background:-ms-linear-gradient(90deg, rgba(110, 90, 33, 1) 0%, rgba(140, 134, 82, 1) 100%);

  /* global 94%+ browsers support */
  background:linear-gradient(90deg, rgba(110, 90, 33, 1) 0%, rgba(140, 134, 82, 1) 100%);
}
 .gradient__bk{
   /* ff 3.6+ */
   background:-moz-linear-gradient(90deg, rgba(190, 188, 184, 1) 99%, rgba(0, 0, 255, 1) 100%); 
 
   /* safari 5.1+,chrome 10+ */
   background:-webkit-linear-gradient(90deg, rgba(190, 188, 184, 1) 99%, rgba(0, 0, 255, 1) 100%);
 
   /* opera 11.10+ */
   background:-o-linear-gradient(90deg, rgba(190, 188, 184, 1) 99%, rgba(0, 0, 255, 1) 100%);
 
   /* ie 6-9 */
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000FF', endColorstr='#BEBCB8', GradientType=0 );
 
   /* ie 10+ */
   background:-ms-linear-gradient(90deg, rgba(190, 188, 184, 1) 99%, rgba(0, 0, 255, 1) 100%);
 
   /* global 94%+ browsers support */
   background:linear-gradient(90deg, rgba(190, 188, 184, 1) 99%, rgba(0, 0, 255, 1) 100%);
 }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyles;