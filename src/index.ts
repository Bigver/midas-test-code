type Portal = { location: number; destination: number };

function quickestPath(portals: Portal[]): number {
  const portalMap = new Map<number, number>();
  for (const { location, destination } of portals) {
    portalMap.set(location, destination);
  }

  const visited = new Map<number, number>();
  const queue: [number, number][] = [[1, 0]];

  while (queue.length > 0) {
    const [position, turns] = queue.shift()!;
    if (position === 200) return turns;

    for (let step = 1; step <= 11; step++) {
      let next = position + step;
      if (next > 200) continue;

      if (portalMap.has(next)) {
        next = portalMap.get(next)!;
      }

      if (!visited.has(next) || visited.get(next)! > turns + 1) {
        visited.set(next, turns + 1);
        queue.push([next, turns + 1]);
      }
    }
  }

  return -1;
}

const portals = [
  { location: 55, destination: 38 },
  { location: 14, destination: 35 },
  { location: 91, destination: 48 },
  { location: 30, destination: 8 },
  { location: 31, destination: 70 },
  { location: 63, destination: 83 },
  { location: 6, destination: 39 },
  { location: 47, destination: 86 },
  { location: 71, destination: 93 },
  { location: 79, destination: 42 },
  { location: 87, destination: 54 },
  { location: 90, destination: 119 },
  { location: 120, destination: 149 },
  { location: 150, destination: 179 },
  { location: 180, destination: 200 },
];

const result = quickestPath(portals);
console.log(result); // คำตอบคือ 6 ตามตัวอย่าง
