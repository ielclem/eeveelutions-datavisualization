$(window).on("load", init);

function init() {

    const ctxEevee = document.getElementById('myChartEevee');

    new Chart(ctxEevee, {
        type: 'bar',
        data: {
            labels: [
                'Eevee',
                'Vaporeon',
                'Jolteon',
                'Flareon',
                'Espeon',
                'Umbreon',
                'Leafeon',
                'Glaceon',
                'Sylveon'
            ],
            datasets: [{
                label: 'Total Base Stats',
                data: [325, 525, 525, 525, 525, 525, 525, 525, 525],
                backgroundColor: [
                    '#f1caa9', // Eevee
                    '#cfe7f3', // Vaporeon
                    '#f6e58d', // Jolteon
                    '#f3a683', // Flareon
                    '#dcd6f7', // Espeon
                    '#b2bec3', // Umbreon
                    '#b8e994', // Leafeon
                    '#dfe6e9', // Glaceon
                    '#f8c6d8'  // Sylveon 
                ],
                borderRadius: 12,
                borderWidth: 0
            }]
        },
        options: {
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Base Stats of Eevee & Its Evolutions 🌟',
                    color: '#7a5c3e',
                    font: {
                        size: 18,
                        family: 'inherit',
                        weight: '900'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#5a4633',
                    titleColor: '#fff',
                    bodyColor: '#fff'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 600,
                    ticks: {
                        stepSize: 100,
                        color: '#7a5c3e'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#7a5c3e'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

const ctxType = document.getElementById('myChartType');

new Chart(ctxType, {
  type: 'doughnut',
  data: {
    labels: ['Water','Electric','Fire','Psychic','Dark','Grass','Ice','Fairy'],
    datasets: [{
      data: [1,1,1,1,1,1,1,1],
      backgroundColor: [
        '#cfe7f3', // Water
        '#f6e58d', // Electric
        '#f3a683', // Fire
        '#dcd6f7', // Psychic
        '#b2bec3', // Dark
        '#b8e994', // Grass
        '#dfe6e9', // Ice
        '#f8c6d8'  // Fairy (Sylveon)
      ],
      borderWidth: 0
    }]
  },
  options: {
    aspectRatio: 1,
    cutout: '55%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#7a5c3e'
        }
      },
      title: {
        display: true,
        text: 'Eeveelution Types 🍬',
        color: '#7a5c3e',
        font: { size: 16, weight: '600' },
        padding: { bottom: 12 }
      }
    }
  }
});

const ctxRole = document.getElementById('myChartRole');

new Chart(ctxRole, {
  type: 'doughnut',
  data: {
    labels: ['Offensive-focused', 'Defensive-focused'],
    datasets: [{
      data: [5, 3],
      backgroundColor: [
        '#f3a683', // warm peach (offense)
        '#b8cbbf'  // soft sage (defense)
      ],
      borderWidth: 0
    }]
  },
  options: {
    aspectRatio: 1,
    cutout: '55%',
    plugins: {
      title: {
        display: true,
        text: 'Playstyle Roles 🧠',
        color: '#7a5c3e',
        font: { size: 16, weight: '600' },
        padding: { bottom: 12 }
      },
      legend: {
        position: 'bottom',
        labels: {
          color: '#7a5c3e'
        }
      }
    }
  }
});

const r1 = document.getElementById('myRadar1');

new Chart(r1, {
  type: 'radar',
  data: {
    labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
    datasets: [
      {
        label: 'Vaporeon',
        data: [130, 65, 60, 110, 95, 65],
        backgroundColor: 'rgba(207, 231, 243, 0.20)',
        borderColor: 'rgba(207, 231, 243, 0.85)',
        borderWidth: 2,
        pointRadius: 2
      },
      {
        label: 'Jolteon',
        data: [65, 65, 60, 110, 95, 130],
        backgroundColor: 'rgba(246, 229, 141, 0.20)',
        borderColor: 'rgba(246, 229, 141, 0.85)',
        borderWidth: 2,
        pointRadius: 2
      },
      {
        label: 'Flareon',
        data: [65, 130, 60, 95, 110, 65],
        backgroundColor: 'rgba(243, 166, 131, 0.20)',
        borderColor: 'rgba(243, 166, 131, 0.85)',
        borderWidth: 2,
        pointRadius: 2
      },
      {
        label: 'Espeon',
        data: [65, 65, 60, 130, 95, 110],
        backgroundColor: 'rgba(220, 214, 247, 0.20)',
        borderColor: 'rgba(220, 214, 247, 0.90)',
        borderWidth: 2,
        pointRadius: 2
      }
    ]
  },
  options: {
    aspectRatio: 1.1,
    plugins: {
      title: {
        display: true,
        text: 'Stat Shapes (Set A)',
        color: '#7a5c3e',
        font: { size: 16, weight: '600' },
        padding: { bottom: 10 }
      },
      legend: {
        position: 'bottom',
        labels: { color: '#7a5c3e', boxWidth: 14, padding: 10 }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 150,
        ticks: { stepSize: 25, showLabelBackdrop: false, color: '#9b7a5a' },
        grid: { color: 'rgba(0,0,0,0.06)' },
        angleLines: { color: 'rgba(0,0,0,0.06)' },
        pointLabels: { color: '#7a5c3e', font: { size: 12, weight: '600' } }
      }
    }
  }
});

const r2 = document.getElementById('myRadar2');

new Chart(r2, {
  type: 'radar',
  data: {
    labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
    datasets: [
      {
        label: 'Umbreon',
        data: [95, 65, 110, 60, 130, 65],
        backgroundColor: 'rgba(178, 190, 195, 0.20)',
        borderColor: 'rgba(178, 190, 195, 0.90)',
        borderWidth: 2,
        pointRadius: 2
      },
      {
        label: 'Leafeon',
        data: [65, 110, 130, 60, 65, 95],
        backgroundColor: 'rgba(184, 233, 148, 0.20)',
        borderColor: 'rgba(184, 233, 148, 0.90)',
        borderWidth: 2,
        pointRadius: 2
      },
      {
        label: 'Glaceon',
        data: [65, 60, 110, 130, 95, 65],
        backgroundColor: 'rgba(223, 230, 233, 0.20)',
        borderColor: 'rgba(223, 230, 233, 0.95)',
        borderWidth: 2,
        pointRadius: 2
      },
      {
        label: 'Sylveon',
        data: [95, 65, 65, 110, 130, 60],
        backgroundColor: 'rgba(248, 198, 216, 0.28)',
        borderColor: '#f8c6d8',
        borderWidth: 3,
        pointRadius: 3
      }
    ]
  },
  options: {
    aspectRatio: 1.1,
    plugins: {
      title: {
        display: true,
        text: 'Stat Shapes (Set B)',
        color: '#7a5c3e',
        font: { size: 16, weight: '600' },
        padding: { bottom: 10 }
      },
      legend: {
        position: 'bottom',
        labels: { color: '#7a5c3e', boxWidth: 14, padding: 10 }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 150,
        ticks: { stepSize: 25, showLabelBackdrop: false, color: '#9b7a5a' },
        grid: { color: 'rgba(0,0,0,0.06)' },
        angleLines: { color: 'rgba(0,0,0,0.06)' },
        pointLabels: { color: '#7a5c3e', font: { size: 12, weight: '600' } }
      }
    }
  }
});
const ctxStat = document.getElementById('strengthChart');

new Chart(ctxStat, {
  type: 'bar',
  data: {
    labels: [
      'HP',
      'Attack',
      'Defense',
      'Speed',
      'Special Attack',
      'Special Defense'
    ],
    datasets: [{
      label: 'Number of Pokémon',
      data: [1, 1, 1, 1, 2, 3],
      backgroundColor: [
        '#cfe7f3', // HP (Vaporeon)
        '#f3a683', // Attack (Flareon)
        '#b8e994', // Defense (Leafeon)
        '#f6e58d', // Speed (Jolteon)
        '#dcd6f7', // Sp. Atk (Espeon / Glaceon)
        '#f8c6d8'  // Sp. Def (Eevee / Umbreon / Sylveon)
      ],
      borderRadius: 8
    }]
  },
  options: {
    aspectRatio: 1.4,
    plugins: {
      title: {
        display: true,
        text: 'Greatest Strengths Across the Eevee Family',
        color: '#7a5c3e',
        font: {
          size: 18,
          weight: '600'
        },
        padding: { bottom: 16 }
      },
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw} Pokémon`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: '#7a5c3e'
        },
        grid: {
          color: 'rgba(0,0,0,0.06)'
        }
      },
      x: {
        ticks: {
          color: '#7a5c3e'
        },
        grid: {
          display: false
        }
      }
    }
  }
});

// generate heart points
const heartPoints = [];
for (let t = 0; t <= Math.PI * 2; t += 0.03) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
  heartPoints.push({ x, y });
}

const heartCtx = document.getElementById('heartChart');

new Chart(heartCtx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Love, Eevee',
      data: heartPoints,
      showLine: true,
      borderColor: '#f8c6d8',
      backgroundColor: 'rgba(248, 198, 216, 0.25)',
      pointRadius: 0,
      borderWidth: 3,
      tension: 0.3
    }]
  },
  options: {
    aspectRatio: 1,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        color: '#7a5c3e',
        font: { size: 16, weight: '600' },
        padding: { bottom: 12 }
      }
    },
    scales: {
      x: { display: true },
      y: { display: true }
    }
  }
});

}
