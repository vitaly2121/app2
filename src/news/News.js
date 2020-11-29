import './style/newsStyle.css';

function News(){
    document.title = 'News';
    return(
        <div className='news'>
           <p>Это страница News</p>
           <p>Произведенные изменения для Git</p>
        </div>    
    )
}
export default News;