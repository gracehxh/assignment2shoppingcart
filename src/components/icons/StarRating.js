const StarRating = ({ rate }) => {
    return (
        <div class="ratings">
            <div class="empty-stars"></div>
            <div class="full-stars" style={{width: `${rate / 5 * 100}%`}}></div>
        </div>

    )
}

export default StarRating;