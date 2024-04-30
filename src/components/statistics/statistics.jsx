const Statistics = props => {
  return (
    <section class="statistics">
      <h2 class="title">{props.title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">{props.stats.docx}%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">{props.stats.mp3}%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">{props.stats.pdf}%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">{props.stats.mp4}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
