export default function ArtistCard(props){
    const{ artists } = props;

    return ( 
    <>
    <div className="artist-card">
        <div className="artist-image">
            <img src={artists.photo_url} alt="{artists.name}'s photos"/>
        </div>
        <div className="artistInfo">
            <h2>{artists.name}</h2>
            <p>Country: {artists.country}</p> <span></span>
            <p>Years active: {artists.years_active}</p>     
        </div>
    </div>
    </>
    );
}
