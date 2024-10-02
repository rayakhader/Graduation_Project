function highlightText(name, query) {
    if (!query) return name
    const parts = name.split(new RegExp(`(${query})`, 'gi'));
    return (
     parts.map((part, index) =>(
                part.toLowerCase() === query.toLowerCase() ? (
                    <span key={index} style={{fontWeight:'bold',display:'inline' }}>{part}</span>
                ) : (
                     <span key={index} style={{display:'inline' }}>{part}</span>
                )
                )
    )
    );
}
export default highlightText