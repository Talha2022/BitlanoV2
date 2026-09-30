import { useTvStatic } from "@/hooks/use-tv-static";

interface StaticBackgroundProps {
    opacity?: number;
}

export default function StaticBackground({ opacity = 0.07 }: StaticBackgroundProps) {
    const canvasRef = useTvStatic(opacity);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity }}
        />
    );
}
