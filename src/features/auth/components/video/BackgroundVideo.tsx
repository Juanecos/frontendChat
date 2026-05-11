
export default function BackgroundVideo() {
	return (
		<>
			<video
				autoPlay
				loop
				muted
				playsInline // Crucial para que funcione en iOS
				poster="/public/fallback.png" // Imagen que se ve mientras carga el video
				className="
					absolute inset-0
					w-full h-full
					object-cover
					brightness-75
					contrast-125
					saturate-75
					z-0
				"
			>
				<source src="/video1.mp4" type="video/webm" />
				<source src="/video1.mp4" type="video/mp4" />
				Tu navegador no soporta videos.
			</video>
				{/* GLASS OVERLAY */}
			{/* DARK OVERLAY */}
			<div className="absolute inset-0 bg-black/60 z-10"></div>

			{/* LIGHT GLOW */}
			<div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
				<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"></div>
			</div>
		</>
	);
}