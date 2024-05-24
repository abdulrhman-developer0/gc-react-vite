export default function BlogPost({ id, title, body }) {
    return (
        <div>
            <h1>{ title || 'Title of post' }</h1>
            <p>{ body || 'body of post'}</p>
            <br />
            <a href={`/news/${id || 0}`}>Read More</a>
        </div>
    )
}