import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"chirag",
      articles:[],
      loading:false
    }
  }
  async componentDidMount(){
    //https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=API_KEY
    // console.log(props);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category || "general"}&apiKey=b59e27653618410d8203d16952bd24ce`;
    const response=await fetch(url);
    const exactdata=await response.json();
    console.log(exactdata);
    this.setState({articles:exactdata.articles});
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top</h2>
      <div className="row">
        {this.state.articles.map((article)=>{
          return(
            <div className='col-md-4'>
            <div className='my-3'>
            <div className="card" style={{width:"18rem"}}>
                  <img src={article.urlToImage} class="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} >Read more</a>
                  </div>
            </div>
            </div>

              </div>
          )
        })}
        </div>
      </div>
    );
  }
}
