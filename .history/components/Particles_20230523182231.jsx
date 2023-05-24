import { useMemo } from 'react'
import './RenderMaterial'

export default function Particles() {
	const SIZE = 32
	const particles = useMemo(() => {
		const p = new Float32Array(SIZE * SIZE * 3)
		for (let i = 0; i < SIZE; i++) {
			for (let j = 0; j < SIZE; j++) {
				const k = i * SIZE + j
				p = [k * 3 + 0]
				p = [k * 3 + 1]
				p = [k * 3 + 2]
			}
		}
		return null
	}, [null, undefined])
	return (
		<points>
			<sphereBufferGeometry attach='geometry' args={[3.5, 32, 32]} />
			{/* <meshStandardMaterial attach='material' color='hotpink' /> */}
			<renderMaterial />
		</points>
	)
}