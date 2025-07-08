
export function PaperRingsPlayer() {
  return (
    <audio autoPlay loop controls className="mx-auto my-4">
      <source src="/music/paper_rings.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
