(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2MzJi",SearchForm:"Searchbar_SearchForm__3CAKx",SearchForm__button:"Searchbar_SearchForm__button__1iUlB",SearchForm__button__label:"Searchbar_SearchForm__button__label__3j47X",SearchForm__input:"Searchbar_SearchForm__input__1KzOz"}},12:function(e,t,a){e.exports={Modal__overlay:"Modal_Modal__overlay__2GAwP",Modal__content:"Modal_Modal__content__3qK6J"}},22:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__29m-Q",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__122uA"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1x0Zb"}},24:function(e,t,a){e.exports={Button:"Button_Button__5Gwba"}},27:function(e,t,a){e.exports={loader:"Loader_loader__NqYAj"}},32:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(32),a(13)),i=a(5),l=a(6),u=a(8),h=a(7),m=a(10),g=a.n(m),d=a(9),b=a(1),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchRequest:""},e.onChangeInput=function(t){e.setState({searchRequest:t.currentTarget.value})},e.onSearchSubmit=function(t){t.preventDefault(),e.state.searchRequest?(e.setState({searchRequest:""}),e.props.onSubmit(e.state.searchRequest)):d.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:g.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:this.onSearchSubmit,className:g.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:g.a.SearchForm__button,children:Object(b.jsx)("span",{className:g.a.SearchForm__button__label,children:"Search"})}),Object(b.jsx)("input",{className:g.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onChangeInput,value:this.state.searchRequest})]})})}}]),a}(n.Component),_=a(12),j=a.n(_),f=document.querySelector("#modal-root"),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:j.a.Modal__overlay,onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:j.a.Modal__content,children:this.props.children})}),f)}}]),a}(n.Component),O=a(76),v=a(22),y=a.n(v),x=function(e){var t=e.toggle,a=e.images;return Object(b.jsx)(b.Fragment,{children:a.map((function(e){return Object(b.jsx)("li",{onClick:t,className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:e.webformatURL,alt:e.tags,className:y.a.ImageGalleryItem__image,"data-largeimage":e.largeImageURL})},Object(O.a)())}))})},w=a(23),I=a.n(w),C=function(e){var t=e.images,a=e.toggleModal;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:I.a.ImageGallery,children:Object(b.jsx)(x,{toggle:a,images:t})})})},M=a(24),k=a.n(M);function F(e){var t=e.onClick;return Object(b.jsx)("button",{onClick:t,className:k.a.Button,children:"Load more"})}var q=a(25),R=a.n(q);function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return R.a.get("https://pixabay.com/api/?key=23598591-bbf9fc426017fbba5b00fa283&q=".concat(e,"&page=").concat(t,"&per_page=12&image_type=photo"))}var G=a(26),D=a.n(G),B=a(27),A=a.n(B),L=function(){return Object(b.jsx)(D.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100,timeout:500,className:A.a.loader})};a(72),a(73);function E(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}var K=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,pictures:[],searchRequest:"",loading:!1,error:"",page:1,largeImageSrc:"",alt:""},e.getData=function(t,a){N(t,a).then((function(t){if(200===t.status&&e.state.searchRequest.trim().length&&(e.setState({pictures:[].concat(Object(s.a)(e.state.pictures),Object(s.a)(t.data.hits))}),0===e.state.pictures.length&&d.b.error("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 - \u041d\u0418\u0427\u0415\u0413\u041e \u041d\u0415 \u041d\u0410\u0419\u0414\u0415\u041d\u041e!"),E()),404===t.status)throw new Error(t.message||"pictures not exist")})).catch((function(e){console.error("error",e)})).finally((function(){e.setState({loading:!1})}))},e.setSearchRequest=function(t){e.setState({loading:!0}),e.setState({searchRequest:t}),e.getData(t,e.state.page)},e.pageIncrement=function(){e.setState({page:e.state.page+1}),e.getData(e.state.searchRequest,e.state.page+1),e.setState({loading:!0})},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.setCurrentPictureSrc=function(t){e.setState({showModal:!e.state.showModal}),void 0!==t&&(e.setState({largeImageSrc:t.target.dataset.largeimage}),e.setState({alt:t.target.alt}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData(this.state.searchRequest,this.state.page)}},{key:"componentDidUpdate",value:function(e,t){t.searchRequest!==this.state.searchRequest&&this.setState({pictures:[]})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d.a,{autoClose:2e3,newestOnTop:!0}),Object(b.jsx)(p,{onSubmit:this.setSearchRequest}),0!==this.state.pictures.length&&Object(b.jsx)(C,{toggleModal:this.setCurrentPictureSrc,images:this.state.pictures}),this.state.showModal&&Object(b.jsx)(S,{onClose:this.toggleModal,children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:this.state.largeImageSrc,alt:this.state.alt})})}),this.state.loading&&Object(b.jsx)(L,{}),this.state.pictures.length>0&&Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(F,{onClick:this.pageIncrement})})]})}}]),a}(n.Component),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.21c4ee31.chunk.js.map