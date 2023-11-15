export const Song = ({fn, song}) => {
    const showPlayer = () => {
        fn(true, song);
    }

    return (
        <div>
            <div className="row">
            <div className="col-2">
                <img src={song.artworkUrl100} alt=""/>
            </div>
            <div className="col-8">
                <p>{song.trackName} {song.artistName}</p>
            </div>
            <div className="col-2">
                <button className="btn btn-warning" onClick={showPlayer}>Play Song</button>
            </div>
            </div>
        </div>
    )
}