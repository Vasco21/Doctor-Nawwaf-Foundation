import styled from 'styled-components';

export const Container = styled.div`
.container{
    display:flex;
      align-items:center;
      justify-content:center;
      height:100vh;
      width:100%;
      
  }
  .p{
      color:white;
      span{
          color: skyblue;
      }
  }
    .form-box{
        width:380px;
        height:550px;
        background-color:black;
        padding:20px;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        opacity:0.5;
        border-radius:2%;
    }
  .header-form{
    margin-bottom:15px;
  }
  button{
    margin-top:40px;
    margin-bottom:10px;
  }
  .message{
    display:flex;
    justify-content:space-between
}
.checkbox{
    color:white;
  }
.form-control{
    background-color:black;
}
`