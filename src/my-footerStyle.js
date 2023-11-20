import {css} from 'lit-element'


export default css `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
	box-sizing: border-box;
}



/*FOOTER*/
.container{
    margin-top:3%
}
.row{
	display: flex;
	flex-wrap: wrap;

}
ul{
	list-style: none;
}
.footer{
	background-color: white;
    padding-right: 10%;
    padding-left: 15%;
}

.footer-col h4{
	font-size: 18px;
	color: black;
    margin: 20px;
}
.footer-col h4::before{
	position: absolute;
	background-color: #0098a9;
	height: 2px;
	box-sizing: border-box;
	width: 100px;
    margin: 2px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: black;
	text-decoration: none;
	font-weight: 300;
	color: black;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: black;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: white;
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: black;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: white;
	background-color: black;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}



`