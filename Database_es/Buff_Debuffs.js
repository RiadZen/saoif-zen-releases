// Buff / Debuffs Database (Spanish)
const buffDebuffData = [
    {
        "name": "Mejorar el ataque 4",
        "buff": "Ataque +4%",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "Mejorar la defensa 4",
        "buff": "Defensa +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Ataque de debilidad 1",
        "buff": "Daño crítico +6%.",
        "numbers": "crit_dmg: 6, general_dmg: 6"
    },
    {
        "name": "Mejorar barra 1",
        "buff": "Daño infligido a enemigos débiles al corte +6%.",
        "numbers": "slashDmg: 6, general_dmg: 6"
    },
    {
        "name": "Mejorar el empuje 1",
        "buff": "Daño infligido a enemigos débiles al empuje +6%.",
        "numbers": "thrustDmg: 6, general_dmg: 6"
    },
    {
        "name": "Mejorar contundente 1",
        "buff": "Daño infligido a enemigos débiles a embotados +6%.",
        "numbers": "bluntDmg: 6, general_dmg: 6"
    },
    {
        "name": "Ataque de debilidad 2",
        "buff": "Daño crítico +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Fortaleza 4",
        "buff": "Defensa +50% cuando HP es <25%.",
        "numbers": "def_percent: 50"
    },
    {
        "name": "Devoción 4",
        "buff": "Ataque +20% cuando HP es >75%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Mejorar el empuje 4",
        "buff": "Daño infligido a enemigos débiles al empuje +24%.",
        "numbers": "thrustDmg: 24, general_dmg: 24"
    },
    {
        "name": "Mejorar el ataque 3",
        "buff": "Ataque +4%.",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "Mejorar la defensa 2",
        "buff": "Defensa +8%.",
        "numbers": "def_percent: 8"
    },
    {
        "name": "Mejorar el ataque 2",
        "buff": "Ataque +8%.",
        "numbers": "atk_percent: 8"
    },
    {
        "name": "Mejorar HP 2",
        "buff": "HP máximo +8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "Toro furioso 2",
        "buff": "Daño +12% a enemigos con desventaja de ataque.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "Semental furioso 2",
        "buff": "Daño +12% a enemigos con desventaja de defensa.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "Mejorar Blunt 4",
        "buff": "Daño infligido a enemigos débiles a embotados +24%.",
        "numbers": "bluntDmg: 24, general_dmg: 24"
    },
    {
        "name": "Golpe ardiente 4",
        "buff": "El ataque contra enemigos quemados aumenta un 24%.",
        "numbers": "general_dmg: 24"
    },
    {
        "name": "Mejorar barra 4",
        "buff": "Daño infligido a enemigos débiles al corte +24%.",
        "numbers": "slashDmg: 24, general_dmg: 24"
    },
    {
        "name": "Pelusa Paso 4",
        "buff": "Defensa+ con cada golpe.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Golpe venenoso 4",
        "buff": "Ataque +24% contra enemigos envenenados.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "Persistencia 4",
        "buff": "Ataque +20% por debajo del 50% de tu propio HP.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Toro furioso 4",
        "buff": "Daño +25% a enemigos con desventaja de ataque.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Semental furioso 4",
        "buff": "Daño +25% a enemigos con desventaja de defensa.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Protección de barra 4",
        "buff": "Reduce el daño del monstruo con elemento de corte en un 15%.",
        "numbers": "slashRes: 15"
    },
    {
        "name": "Mejorar la defensa 3",
        "buff": "Defensa +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Objetivo de sangrado fuerte 4",
        "buff": "La probabilidad de sangrado aumenta enormemente. [Sangrado de precisión 4] Tasa crítica +24 % en el sangrado.",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "Golpe sangriento 4",
        "buff": "Ataque +24% contra enemigos sangrantes.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "Ataque de debilidad 4",
        "buff": "Daño crítico +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Paso 4",
        "buff": "Aumenta la tasa crítica a medida que aumenta el número de HITS.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Protección de empuje 4",
        "buff": "Reduce el daño del monstruo del elemento de empuje en un 15%.",
        "numbers": "thrustRes: 15"
    },
    {
        "name": "Reanimación 4",
        "buff": "Como HP está por debajo del 50%, la tasa crítica aumenta un 30%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Protección contundente 4",
        "buff": "Disminuye el daño un 15% de los monstruos de elemento contundente. [Mejorar Defensa 3] Defensa +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Voluntad de acero 4",
        "buff": "El daño disminuye al 20% cuando HP es del 25% o menos. [Mejorar Defensa 3] Defensa +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Ataque preciso 3",
        "buff": "Tasa crítica +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "Lleno de Yuuki 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Yuuki en el mismo conjunto, Defensa +8%. Al equipar 5 o más Registros de Habilidad de Yuuki en el mismo conjunto, Ataque +8%.",
        "numbers": "def_percent: 8, atk_percent: 8"
    },
    {
        "name": "Ataque preciso 4",
        "buff": "Tasa crítica +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "Mejorar HP 4",
        "buff": "El HP máximo aumenta un 8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "Elixir de gigante",
        "buff": "Los elementos y objetos de recuperación en los campos disminuyen la tasa de recuperación en un 50% y Max HP aumentará un 30%.",
        "numbers": "hp_percent: 30"
    },
    {
        "name": "regalo de flores 4",
        "buff": "Cuando un objeto te cura dentro del campo, el ataque y la defensa aumentan un 10%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Fragancia de flores 4",
        "buff": "La activación crítica aumenta un 35% cuando te estás curando con un objeto en el campo.",
        "numbers": "crit_rate: 35"
    },
    {
        "name": "Elimina tu miedo 4",
        "buff": "Si bien la mejora de defensa+ es efectiva, el poder de ataque aumentará un 25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Control de multitudes 4",
        "buff": "Ataque +8% hacia el enemigo en Achaques de Estado (Veneno, Quemadura, Sangrado, Congelación), daño del enemigo en Achaques de Estado (Veneno, Quemadura, Sangrado, Congelación) -8%.",
        "numbers": "atk_percent: 8, allRes: 8"
    },
    {
        "name": "Oportunidad de ataque 4",
        "buff": "Daño crítico al enemigo +20% mientras el poder de ataque del enemigo disminuye.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "Oportunidad para la defensa 4",
        "buff": "Tasa de activación crítica +20% mientras el poder de defensa del enemigo disminuye.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Espíritu de lucha 4",
        "buff": "Mientras que el ataque de mejora+ es efectivo, la defensa +25%.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "Evasión 4",
        "buff": "Tasa de evasión +10%. *No se activará con un ataque concentrado./â—[Contador 4] Añade una mejora al evadir, +10% de tasa crítica durante 5 segundos.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Romper el ataque 4",
        "buff": "Ataque +35% a los enemigos cuando se usa descanso.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Rotura de círculo 3",
        "buff": "Aumento del indicador de ruptura hacia el enemigo en un +25 %.",
        "numbers": "break_pct: 25"
    },
    {
        "name": "Resistir 4",
        "buff": "Afecciones de estado (veneno, quemaduras, sangrado, congelación) Res. +10%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Fortaleza 3",
        "buff": "Defensa +10% cuando HP es <25%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Mejorar Berserk 4",
        "buff": "Cuando el jugador tiene dolencias de estado (veneno, quemaduras, sangrado, congelación, maldición, debilidad), ataque +25%./â—[Mejora de coagulación 4] Daño de sangrado -50%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Quemar ataque de precisión 4",
        "buff": "Tasa de críticos +24 % hacia oponentes con quemaduras.",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "Giro rápido 4",
        "buff": "Ataque +10% durante 5 segundos cuando ocurre evasión.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Mejorar HP 3",
        "buff": "HP máximo aumenta un 10%.",
        "numbers": "hp_percent: 10"
    },
    {
        "name": "Aceleración 4",
        "buff": "Daño crítico +30% cuando HP está por debajo del 50%.",
        "numbers": "crit_dmg: 30, general_dmg: 30"
    },
    {
        "name": "Estado dolencias golpe 4",
        "buff": "Ataque +18% contra enemigos con estados alterados (veneno, quemadura, sangrado, congelación).* Evolución y avance máximo",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Agachadiza 4",
        "buff": "Cantidad de daño +18% hacia los monstruos que no apuntan al jugador.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Curación de batalla alta 4",
        "buff": "Recupera un máximo de 1,5% de HP cada 3 segundos.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Mejorar barra 3",
        "buff": "Daño infligido a enemigos débiles al corte +15%.",
        "numbers": "slashDmg: 15, general_dmg: 15"
    },
    {
        "name": "Hoja helada 3",
        "buff": "Inflige +5% del daño del elemento agua al enemigo.",
        "numbers": "waterDmg: 5"
    },
    {
        "name": "Milagro en Battlefield 4",
        "buff": "Daño crítico +25%, mientras que aumentar la tasa de críticos es efectivo.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "Conversión de llama 4",
        "buff": "Daño del elemento agua a los enemigos -10% y daño del elemento fuego a los enemigos +25%.",
        "numbers": "fireDmg: 25, general_dmg: 25"
    },
    {
        "name": "Conversión de la Tierra 4",
        "buff": "Daño del elemento viento a los enemigos -10% y daño del elemento tierra a los enemigos +25%.",
        "numbers": "earthDmg: 25, general_dmg: 25"
    },
    {
        "name": "Técnica de espada veterana 4",
        "buff": "El poder de ataque aumenta con el propio nivel: 0,17%. (máximo 34%)/â—[Black Truth 4] Daño adicional 200 al atacar a un enemigo con estado alterado (veneno, quemadura, sangrado, congelación).",
        "numbers": "additionalDmg: 200"
    },
    {
        "name": "Conversión acuática 4",
        "buff": "Daño del elemento fuego a los enemigos -10% y daño del elemento agua a los enemigos +25%.",
        "numbers": "waterDmg: 25, general_dmg: 25"
    },
    {
        "name": "Conversión de viento 4",
        "buff": "Daño del elemento tierra a los enemigos -10% y daño del elemento viento a los enemigos +25%.",
        "numbers": "windDmg: 25, general_dmg: 25"
    },
    {
        "name": "Destello negro 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Kirito en el mismo conjunto, tasa de crítico +20%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Batalla conjunta negra 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Kirito en el mismo conjunto, daño crítico +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Espada legendaria negra 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Kirito en el mismo conjunto, Ataque +15%.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Combate negro 4",
        "buff": "Al equipar 3 o más Registros de habilidades de Kirito en el mismo conjunto, la tasa de evasión +5%. *No se activará con ataque de enfoque.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Hada Negra 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Kirito en el mismo conjunto, Max HP +22%.",
        "numbers": "hp_percent: 22"
    },
    {
        "name": "Afecto negro 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Kirito en el mismo conjunto, tasa de crítico +15%.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "Acorde rojo 4",
        "buff": "ATK +10% mientras tu propio beneficio esté vigente.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Acorde azul 4",
        "buff": "Daño +10% al enemigo que tiene ATK disminuyendo.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "Acorde verde 4",
        "buff": "Daño +10% al enemigo que tiene DEF disminuyendo.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "Conversión de brillo 4",
        "buff": "Daño del elemento oscuro a los enemigos -10% y daño del elemento sagrado a los enemigos +25%.",
        "numbers": "holyDmg: 25, general_dmg: 25"
    },
    {
        "name": "¡Hay un caso!",
        "buff": "Daño crítico +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "¡Solo hay una verdad!",
        "buff": "ATK +20% al enemigo al que se le ha encontrado su debilidad.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Hoja de vendaval 3",
        "buff": "Inflige +4,5 % del daño del elemento viento al enemigo.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Columpio completo 4",
        "buff": "Tasa crítica +20% cuando HP está por encima del 75%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Ojo de francotirador 4",
        "buff": "Cuando el aumento del daño crítico es efectivo para ti, la tasa de críticos +35%.",
        "numbers": "crit_rate: 35, general_dmg: 35"
    },
    {
        "name": "Elemento agregado",
        "buff": "Agrega Elemento Sagrado a los ataques normales. (El efecto del Elemento Agregado no se superpone y se priorizará en el orden de Oscuridad, Sagrado, Tierra, Viento, Agua y Fuego).",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Hoja de destello 4",
        "buff": "Tasa crítica para ataques normales +35%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "brisa 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Kirito en el mismo conjunto, daño crítico +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Flor floreciente 4",
        "buff": "Al atacar con 2 o más Registros de Habilidad de \"Leafa\" equipados dentro del mismo conjunto, inflige daño adicional de 300.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Sorteo mortal 4",
        "buff": "Tasa crítica +50% cuando HP es >99%.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "La espada secreta del dragón 4",
        "buff": "Ataque +25% cuando HP es >99%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Asesino de la sombra de la luz de la luna 4",
        "buff": "Daño crítico +38% cuando HP es >99%.",
        "numbers": "crit_dmg: 38, general_dmg: 38"
    },
    {
        "name": "Emoción oculta 4",
        "buff": "Al equipar 1 o más Registros de habilidades de Kirito en el mismo conjunto, tasa de crítico +15%./â—[El cielo que vimos juntos 4] ATK +10% mientras tu propio beneficio esté en efecto./â—[Mejorar la curación 4] Efecto de los elementos de curación y objetos de campo +25%.",
        "numbers": "crit_rate: 15, atk_percent: 10"
    },
    {
        "name": "¡Hermana mayor! 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Asuna en el mismo conjunto, Ataque +10%",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "mi deseo 4",
        "buff": "Al evadir, agrega una mejora de +15% de tasa crítica y daño crítico durante 10 segundos.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Golpe de congelación 4",
        "buff": "El ataque contra enemigos con congelación aumenta un 20%.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "Campana Dorada 4",
        "buff": "Mientras la mejora de tu propio daño adicional esté vigente, la tasa de críticos pasa a ser +20%.",
        "numbers": "additionalDmg: NaN, general_dmg: 20"
    },
    {
        "name": "Magia de luz 4",
        "buff": "Aumento del DEF con nivel propio: 0,17%. (máximo 34%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Hoja helada 4",
        "buff": "Inflige +20% del daño del elemento agua al enemigo.",
        "numbers": "waterDmg: 20"
    },
    {
        "name": "Promesa hecha 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Kirito en el mismo conjunto, tasa de crítico +20%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Ropa helada 3",
        "buff": "Cuando estás congelado, Defensa +10% y daño por congelación -15%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Anillo helado 3",
        "buff": "Cuando estás congelado, la tasa crítica +20% y el daño por congelación -15%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Margen del experto 4",
        "buff": "Tasa de críticos y daño crítico +12% cuando HP está por debajo del 50%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Resultados de entrenamiento especial 4",
        "buff": "La tasa crítica aumenta en su propio nivel: 0,28%. (máximo 56%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "valor 4",
        "buff": "Poder de ataque +12% durante el efecto de mejora para aumentar el daño crítico.",
        "numbers": "atk_percent: 12"
    },
    {
        "name": "Confianza vacilante 4",
        "buff": "Cuando el daño crítico es inferior al 10%, si 3 o más Registros de Habilidad de Asuna están equipados en el mismo conjunto, este efecto no será válido.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Ataque de debilidad 3",
        "buff": "Daño crítico +25%.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "Corazón tenso 4",
        "buff": "Cuando la tasa crítica es inferior al 15%, si 3 o más Registros de Habilidad de Kirito están equipados en el mismo conjunto, este efecto no será válido.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Soldado avanzado 3",
        "buff": "Ataque +300.",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Mejorar el Antídoto 5",
        "buff": "Daño por veneno -70%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lleno de Asuna",
        "buff": "Al equipar 3 o más Registros de Habilidad de Asuna en el mismo conjunto, Ataque +10%. Al equipar 6 o más Registros de Habilidad de Asuna en el mismo conjunto, tasa de crítico +20%.",
        "numbers": "atk_percent: 10, crit_rate: 20"
    },
    {
        "name": "Guantelete del gigante 4",
        "buff": "Mientras el beneficio de tu propio daño adicional esté vigente, el ataque pasa a ser +25%.",
        "numbers": "additionalDmg: NaN, general_dmg: 25"
    },
    {
        "name": "Recuerda 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Kirito en el mismo conjunto, tasa de crítico +30%.",
        "numbers": "crit_rate: 30"
    },
    {
        "name": "Asesino de peces 3",
        "buff": "Inflige daño de viento al enemigo +10%.",
        "numbers": "windDmg: 10, general_dmg: 10"
    },
    {
        "name": "Voz Pura",
        "buff": "Daño crítico +20% cuando tu propio HP está por encima del 75%. [Killer Smile] ATK +20% al enemigo al que se le ha encontrado su debilidad.",
        "numbers": "crit_dmg: 20, general_dmg: 20, atk_percent: 20"
    },
    {
        "name": "Llama Purificadora 4",
        "buff": "Inflige +22% del daño del elemento Fuego al enemigo.",
        "numbers": "fireDmg: 22"
    },
    {
        "name": "Comando del paladín 4",
        "buff": "Ataque +10%.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Romper el ataque 3",
        "buff": "Ataque +25% a los enemigos al usar break.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Breve descanso 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Kirito en el mismo conjunto, Ataque +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Tremendo Aliento 4",
        "buff": "Cuando un objeto te cura dentro del campo, el ataque aumenta un 25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Ley del Cielo y la Tierra 4",
        "buff": "Cuando un objeto te cura dentro del campo, la resistencia al estado afectado (parálisis, aturdimiento, sueño) aumenta un +100%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Breve Reposo 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Asuna en el mismo conjunto, Ataque +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Sonrisa del diablo 4",
        "buff": "La tasa crítica de ataques no normales disminuye un 20%, la tasa crítica de ataques normales aumenta un 80%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Invitación oscura 4",
        "buff": "Inflige +22 % del daño del elemento oscuro al enemigo.",
        "numbers": "darkDmg: 22"
    },
    {
        "name": "Ojos decididos 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Eugeo en el mismo conjunto, +300 de daño adicional al atacar./â—[Attack Up 3] Ataque +50.",
        "numbers": "additionalDmg: NaN, flat_atk: 50"
    },
    {
        "name": "Fuerza de voluntad 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Alice en el mismo conjunto, +300 de daño adicional al atacar./â—[Knight's Vow 3] Su propio HP máximo 0.3% se recupera cuando los monstruos son derrotados.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Juramento de supervivencia 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Asuna en el mismo conjunto, Ataque +15%. Al equipar 1 o más Registros de Habilidad de Silica en el mismo conjunto, HP máximo +10%. Al equipar 1 o más Registros de Habilidad de Lisbeth en el mismo conjunto, daño crítico +15%",
        "numbers": "atk_percent: 15, hp_percent: 10, crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "El poder de la unidad 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Asuna en el mismo conjunto, el Daño infligido a enemigos débiles a empujar +10%. Al equipar 2 o más Registros de Habilidad de Yuuki en el mismo conjunto, el Daño infligido a enemigos débiles a cortar +10%.",
        "numbers": "thrustDmg: 10, general_dmg: 20, slashDmg: 10"
    },
    {
        "name": "brisa 3",
        "buff": "Al equipar 1 o más Registros de Habilidad de Kirito en el mismo conjunto, daño crítico +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Danza terrestre 4",
        "buff": "Inflige +22% del daño del elemento Tierra al enemigo./â—[Martillo 3] Inflige 1000 de daño adicional contra enemigos con estado de desventaja (Marca, Marca pequeña, Marca de muerte, Marca de erosión de empuje, Marca de destrucción de corte).",
        "numbers": "earthDmg: 22, additionalDmg: NaN"
    },
    {
        "name": "Danza ligera 4",
        "buff": "Inflige +22 % del daño del elemento sagrado al enemigo./â—[Devoción 3] Ataque +10 % cuando HP es >75 %.",
        "numbers": "holyDmg: 22, atk_percent: 10"
    },
    {
        "name": "Elimina tu miedo 3",
        "buff": "Si bien la mejora de defensa+ es efectiva, el poder de ataque aumentará un 15%./â—[MHCP 3] Daño adicional +200 al atacar.",
        "numbers": "atk_percent: 15, additionalDmg: NaN"
    },
    {
        "name": "Noteme Senpai 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Eugeo en el mismo conjunto, Ataque +12%./â—[Voluntad de continuar 4] Mientras la mejora de tu propio daño adicional esté vigente, daño adicional +1000 al atacar.",
        "numbers": "atk_percent: 12, additionalDmg: NaN"
    },
    {
        "name": "Técnica de espada veterana 3",
        "buff": "El poder de ataque aumenta con el propio nivel: 0,12 %. (máximo 24%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Regalo Sonrisa 4",
        "buff": "Restaura el 3% de tu propio HP máximo en caso de golpe crítico. (Una vez por habilidad)* Evolución y avance máximo",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Contador 5",
        "buff": "Agrega una mejora al evadir, +30% de tasa crítica durante 8 segundos.* Evolución y avance máximo",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "enfrentamiento 5",
        "buff": "Resistencia al retroceso +60% cuando HP supera el 75%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Tempo arriba 5",
        "buff": "El ataque aumenta con el número de golpes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Paso 5",
        "buff": "Aumenta la tasa crítica a medida que aumenta el número de HITS.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "dominación negra",
        "buff": "Ataque +15% cuando no se equipa ningún Registro de Habilidad de Alice en el mismo conjunto.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Conversión oscura 4",
        "buff": "Daño del elemento sagrado a los enemigos -10% y daño del elemento oscuro a los enemigos +25%.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "Lucha con facilidad 4",
        "buff": "Ataque +25 % mientras esté vigente la mejora que recupera HP gradualmente según el registro de habilidad./â—[Precise Attack Boost 3] Tasa de críticos +15 % mientras la mejora para aumentar la tasa de críticos esté vigente.* Evolución y avance máximo",
        "numbers": "atk_percent: 25, crit_rate: 15"
    },
    {
        "name": "Rush imprudente 4",
        "buff": "Ataque +25% mientras la mejora que aumenta tu propia resistencia al retroceso esté vigente./â—[Breaking Fist 3] Tasa de crítico +15% mientras la mejora de tu propio daño adicional esté vigente.",
        "numbers": "atk_percent: 25, crit_rate: 15, additionalDmg: NaN"
    },
    {
        "name": "Tócalo por Ear 4",
        "buff": "Ataque +10% cuando HP está por encima del 50% y defensa +10% cuando HP está por debajo del 50%.",
        "numbers": "atk_percent: 10, def_percent: 10"
    },
    {
        "name": "Mejorar barra 2",
        "buff": "Daño infligido a enemigos débiles al corte +10%.",
        "numbers": "slashDmg: 10, general_dmg: 10"
    },
    {
        "name": "Mejorar el empuje 2",
        "buff": "Daño infligido a enemigos débiles al empuje +10%.",
        "numbers": "thrustDmg: 10, general_dmg: 10"
    },
    {
        "name": "Mejorar contundente 2",
        "buff": "Daño infligido a enemigos débiles a embotados +10%.",
        "numbers": "bluntDmg: 10, general_dmg: 10"
    },
    {
        "name": "¡Guau, guau!",
        "buff": "Ataque +18% contra enemigos con efecto de mejora y reduce el daño en un 10%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "¡Somos gemelos!",
        "buff": "Tasa de críticos +20% contra enemigos con efecto de mejora y daño crítico +20%.",
        "numbers": "crit_rate: 20, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Procesamiento de datos 4",
        "buff": "Daño crítico +20% a enemigos con estado de desventaja.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Procesamiento de datos 3",
        "buff": "Daño crítico +15% contra enemigos con estado de desventaja.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Protección de barra 3",
        "buff": "Reduce el daño del monstruo con elemento de corte del 12%.",
        "numbers": "slashRes: 12"
    },
    {
        "name": "Los ladrones fantasmas de corazones: Pantera",
        "buff": "Daño adicional +1000 al equipar 2 o más Registros de Habilidad de cualquiera de los personajes Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet en el mismo conjunto.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Los ladrones fantasmas de corazones: Mona",
        "buff": "Daño adicional +500 al equipar 2 o más Registros de Habilidad de cualquiera de los personajes Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet en el mismo conjunto.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Los ladrones fantasmas de corazones: reina",
        "buff": "Daño adicional +1000 al equipar 2 o más Registros de Habilidad de cualquiera de los personajes Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet en el mismo conjunto.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Aumento de poder 3",
        "buff": "Ataque +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Corazón simpático: Leafa",
        "buff": "Daño crítico +15% al equipar 1 o más Registros de Habilidad de cualquiera de los personajes Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet en el mismo conjunto.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Corazón comprensivo: Yuuki",
        "buff": "Tasa crítica +15% al equipar 1 o más Registros de Habilidad de cualquiera de los personajes Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet en el mismo conjunto.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "Corazón comprensivo: Alice",
        "buff": "Ataque +15% al equipar 1 o más Registros de Habilidad de cualquiera de los personajes Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet en el mismo conjunto.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Hoja de vendaval 4",
        "buff": "Inflige +20 % del daño del elemento viento al enemigo.",
        "numbers": "windDmg: 20"
    },
    {
        "name": "Autoguardado 4",
        "buff": "Defensa +25% cuando el estado sufre alteraciones con parálisis, aturdimiento, sueño, maldición, debilidad, petrificación, veneno, quemadura, sangrado, congelación.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "Turno de talento 1",
        "buff": "El efecto cambia según los registros de habilidades en el mismo conjunto. Recupera 70 HP cada 3 s al equipar 1 o más Registros de Habilidad de Alice en el mismo conjunto. Ataque +20% al no equipar Alice Skill Records en el mismo conjunto.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Mejorar Blunt 3",
        "buff": "Daño infligido a enemigos débiles a embotados +15%.",
        "numbers": "bluntDmg: 15, general_dmg: 15"
    },
    {
        "name": "Curación de batalla alta 3",
        "buff": "Recupera un máximo de 1,2 % de HP cada 3 s.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Puñalada por la espalda 4",
        "buff": "Daño +18% hacia los monstruos no dirigidos al jugador.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Dominación oscura",
        "buff": "Daño adicional +1000 al no equipar ningún Alice Skill Records en el mismo conjunto.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Golpe de congelación 3",
        "buff": "El ataque contra enemigos con congelación aumenta un 18%.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Batalla por la justicia",
        "buff": "Resistencia al retroceso +80% cuando HP está al 100%. Recupera un máximo de 1% de HP cada 3 segundos cuando HP cae por debajo del 99%.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "Estado dolencias golpe 3",
        "buff": "Ataque +18% contra enemigos con estados alterados (veneno, quemadura, sangrado, congelación)./â—[Ojo izquierdo del dragón] Daño adicional +1000.",
        "numbers": "atk_percent: 18, additionalDmg: NaN"
    },
    {
        "name": "Asentimiento vital 3",
        "buff": "Defensa +400.",
        "numbers": "flat_def: 400"
    },
    {
        "name": "Color del espíritu",
        "buff": "El efecto cambia dependiendo de los Registros de Habilidad en el mismo conjunto. Al equipar 1 o más de los Registros de Habilidad de Asuna: HP máximo +10%. Al equipar 1 o más de los Registros de Habilidad de Sinon: Ataque +20%. Al equipar 1 o más de los Registros de Habilidad de Leafa: Daño adicional +500. Al equipar 1 o más de los Registros de Habilidad de Alice: Tasa crítica +10%. Al equipar 1 o más de la Habilidad de Eugeo Registros: Daño crítico +10%.",
        "numbers": "hp_percent: 10, atk_percent: 20, additionalDmg: NaN, crit_rate: 10, crit_dmg: 10, general_dmg: 10"
    },
    {
        "name": "Invitación oscura 3",
        "buff": "Inflige +15% del daño del elemento oscuro al enemigo.",
        "numbers": "darkDmg: 15"
    },
    {
        "name": "Aprendizaje automático 4",
        "buff": "Agrega efectos adicionales según la cantidad de registros de habilidades de Alice equipados en el mismo conjunto.2 o más: Defensa +5%.3 o más: HP máximo +10%.4 o más: Tasa de críticos +15%.5 o más: Daño crítico +15%.6 o más: Ataque +20%.",
        "numbers": "def_percent: 5, hp_percent: 10, crit_rate: 15, crit_dmg: 15, general_dmg: 15, atk_percent: 20"
    },
    {
        "name": "Lleno de Alicia 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Alice en el mismo conjunto, Defensa +10%. Al equipar 6 o más Registros de Habilidad de Alice en el mismo conjunto, el daño crítico +20%.",
        "numbers": "def_percent: 10, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Cambio de talento 2",
        "buff": "El efecto cambia dependiendo de los Registros de Habilidad en el mismo conjunto. Daño adicional +1000 al equipar 1 o más Registros de Habilidad de Alice en el mismo conjunto. Ataque +20% al no equipar ningún Registro de Habilidad de Alice en el mismo conjunto.",
        "numbers": "additionalDmg: NaN, atk_percent: 20"
    },
    {
        "name": "Acorde ligero 4",
        "buff": "Daño del elemento sagrado +28% a los enemigos que tienen un efecto de mejora.",
        "numbers": "holyDmg: 28, general_dmg: 28"
    },
    {
        "name": "Colaboración de ensueño",
        "buff": "El ataque aumenta 150 veces la cantidad de registros de habilidades de Yuna en el mismo conjunto.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Acorde oscuro 4",
        "buff": "Daño del elemento oscuro +28% a los enemigos que tienen un efecto de mejora.",
        "numbers": "darkDmg: 28, general_dmg: 28"
    },
    {
        "name": "Soldado avanzado 4",
        "buff": "Ataque +400.",
        "numbers": "flat_atk: 400"
    },
    {
        "name": "Indemnización de la Tierra 3",
        "buff": "Cuando estás envenenado, daño del elemento tierra +40%./â—[Enhance Antídote 3] Daño de veneno -30%.",
        "numbers": "earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "Mejorar el empuje 3",
        "buff": "Daño infligido a enemigos débiles al empuje +15%.",
        "numbers": "thrustDmg: 15, general_dmg: 15"
    },
    {
        "name": "Danza terrestre 2",
        "buff": "Inflige +9,3% del daño del elemento Tierra al enemigo.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aumento de ataque de debilidad 3",
        "buff": "Daño crítico +15 % mientras la mejora para aumentar el daño crítico esté vigente.* Evolución y avance máximo",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Cambio de talento 3",
        "buff": "El efecto cambia dependiendo de los Registros de Habilidad en el mismo conjunto. Cantidad curada por plantas +10% al equipar 1 o más Registros de Habilidad de Alice en el mismo conjunto. Ataque +20% al no equipar ningún Registro de Habilidad de Alice en el mismo conjunto.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Afecto fraternal 4",
        "buff": "El daño crítico aumenta un 5 % x la cantidad de registros de habilidades de Leafa en el mismo conjunto. El ataque aumenta un 6 % x la cantidad de registros de habilidades de sílice en el mismo conjunto.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "Indemnización de llamas 3",
        "buff": "Cuando te quemas, daño del elemento fuego + 40%./â—[Mejorar la inmunidad a quemaduras 3] Daño por quemaduras -30%.",
        "numbers": "fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "Mejorar Berserk 3",
        "buff": "Cuando el jugador tiene Achaques de Estado (Veneno, Quemadura, Sangrado, Congelación, Maldición, Debilidad), Ataque +20%.* Evolución y Avance Máximo",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Soldado avanzado 5",
        "buff": "Ataque +500.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Cinco armas afiladas 3",
        "buff": "Ataque +800 al atacar con elemento de empuje.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Mantenga el frente 4",
        "buff": "Recupera un máximo de 5%+200 HP cada 3 segundos cuando HP está por debajo del 50%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Golpe ardiente 3",
        "buff": "El ataque contra enemigos quemados aumenta un 18%.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Aumento de poder 4",
        "buff": "Ataque +900.",
        "numbers": "flat_atk: 900"
    },
    {
        "name": "Hielo fino 4",
        "buff": "Defensa -30% y durante el efecto de mejora para aumentar el HP máximo, el HP -99% cada 3 s.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Hoja helada 2",
        "buff": "Inflige +9,3% del daño del elemento agua al enemigo.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lucha con facilidad 3",
        "buff": "Ataque +20% mientras esté vigente el beneficio que recupera gradualmente HP dependiendo del Registro de habilidad./â—[Enhance Heal 4] Efecto de elementos curativos y objetos de campo +25%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Hermano confiable 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Leafa en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Evasión 3",
        "buff": "Tasa de evasión +7,2%. *No se activará con ataque de enfoque.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Golpe de mazo 4",
        "buff": "Daño infligido a enemigos débiles a embotados +30 % contra enemigos con estado de desventaja (Marca, Marca pequeña, Marca de muerte, Marca de erosión de empuje, Marca de destrucción de corte).",
        "numbers": "bluntDmg: 30, general_dmg: 30"
    },
    {
        "name": "Toro furioso 3",
        "buff": "Daño +18% a enemigos con desventaja de ataque.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Semental furioso 3",
        "buff": "Daño +18% a enemigos con desventaja de defensa.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Espíritu de espada creciente 4",
        "buff": "El ataque aumenta en un 3,5% x la cantidad de registros de habilidades de Yuuki en el mismo conjunto.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Energético 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Agil en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Hoja de vendaval 2",
        "buff": "Inflige +9,3 % del daño del elemento viento al enemigo.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aceleración 3",
        "buff": "Daño crítico +20% cuando HP está por debajo del 50%.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Golpe de batalla sangriento 3",
        "buff": "Ataque +35% al atacar con elemento contundente.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Colmillo de acero 4",
        "buff": "Ataque +500 al atacar con elemento de empuje.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Impulso de llama 4",
        "buff": "Daño elemental distinto del fuego infligido a los enemigos -50% y daño del elemento fuego a los enemigos +40%.",
        "numbers": "waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "El gobierno de la espada legendaria",
        "buff": "Ataque +20% cuando no se equipa ningún Registro de Habilidad de Kirito en el mismo conjunto.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Conversión de llama 3",
        "buff": "Daño del elemento agua a los enemigos -10% y daño del elemento fuego a los enemigos +20%.",
        "numbers": "fireDmg: 20, general_dmg: 20"
    },
    {
        "name": "Conociendo a un amigo",
        "buff": "Recupera 80 HP cada 3 s al equipar 3 o más Registros de Habilidad de Asuna en el mismo conjunto.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Fuera de tipo 4",
        "buff": "Defensa -30 % y durante el efecto de mejora para aumentar HP máximo, el ataque y el daño -99 % cuando se usa ataque normal.* Evolución y avance máximo",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "dios del mar 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Sinon en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Danza terrestre 5",
        "buff": "Inflige +25% del daño del elemento Tierra al enemigo.",
        "numbers": "earthDmg: 25"
    },
    {
        "name": "Cambio de talento 4",
        "buff": "El efecto cambia dependiendo de los Registros de Habilidad en el mismo conjunto. Al equipar 1 o más Registros de Habilidad de Kirito en el mismo conjunto, +tasa de éxito para Quemar. Daño infligido a enemigos débiles a cortantes +30% cuando no se equipa ningún Registro de Habilidad de Kirito en el mismo conjunto.",
        "numbers": "slashDmg: 30, general_dmg: 30"
    },
    {
        "name": "Todo en negro 4",
        "buff": "Agrega efectos adicionales según la cantidad de registros de habilidades de Kirito equipados en el mismo conjunto.2 o más: recupera un máximo de 1,2% de HP cada 3 segundos.3 o más: HP máximo +5%.4 o más: índice de críticos +10%.5 o más: daño crítico +10%.6 o más: ataque +15%.",
        "numbers": "hp_percent: 5, crit_rate: 10, crit_dmg: 10, general_dmg: 10, atk_percent: 15"
    },
    {
        "name": "Golpe sangriento 3",
        "buff": "Ataque +18% contra enemigos sangrantes.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Más Deban 1",
        "buff": "Al equipar 1 o más Registros de Habilidad de Lisbeth en el mismo conjunto, Ataque +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Autoguardado 2",
        "buff": "Defensa +15% cuando el estado sufre alteraciones con parálisis, aturdimiento, sueño, maldición, debilidad, petrificación, veneno, quemadura, sangrado, congelación.",
        "numbers": "def_percent: 15"
    },
    {
        "name": "Indemnización de la luz 3",
        "buff": "Cuando estás debilitado, el daño del elemento sagrado +40%.",
        "numbers": "holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "Castigo con mano de hierro 4",
        "buff": "Ataque +500 al atacar con elemento contundente.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Rey de mazas 3",
        "buff": "Ataque +1000 cuando 1H Club está equipado",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Rebelde contra el sistema 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Asuna en el mismo conjunto, Ataque +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Tácticas crudas 2",
        "buff": "Defensa -30% y, cuando HP está por debajo del 50%, daño no elemental -400%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Impulso del viento 4",
        "buff": "Daño elemental distinto del viento infligido a los enemigos -50% y daño del elemento viento a los enemigos +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, windDmg: 40, general_dmg: 40"
    },
    {
        "name": "Pantera Negra 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Sachi en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Impulso oscuro 4",
        "buff": "Daño elemental distinto del oscuro infligido a los enemigos -50% y daño del elemento oscuro a los enemigos +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, noneDmg: -50, darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "Cambiar a cuerpo a cuerpo 4",
        "buff": "Ataque +20% cuando no se equipa ningún Registro de Habilidad de Sinon en el mismo conjunto.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Más Deban 2",
        "buff": "Al equipar 1 o más Registros de Habilidad de Silica en el mismo conjunto, Ataque +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Indemnización de las Sombras 3",
        "buff": "Cuando estás maldito, el daño del elemento oscuro +40%.",
        "numbers": "darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "Contador de maldiciones 4",
        "buff": "Cuando el jugador tiene dolencias de estado (maldición), ataque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Embestida 4",
        "buff": "Ataque +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Indemnización de hielo 3",
        "buff": "Cuando estás congelado, el daño del elemento agua +40%./â—[Enhance Frostbite 3] Daño por congelación -30%.",
        "numbers": "waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "Impacto aplastante 3",
        "buff": "Ataque +800 al atacar con elemento contundente.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Impulso acuático 4",
        "buff": "Daño elemental distinto del agua infligido a los enemigos -50% y daño del elemento agua a los enemigos +40%.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "Autoguardado 3",
        "buff": "Defensa +20% cuando el estado sufre alteraciones con parálisis, aturdimiento, sueño, maldición, debilidad, petrificación, veneno, quemadura, sangrado, congelación.",
        "numbers": "def_percent: 20"
    },
    {
        "name": "Prosperar 4",
        "buff": "Ataque +20% cuando HP está por encima del 50%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Golpe de congelación 5",
        "buff": "El ataque contra enemigos con congelación aumenta un 30%.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "Encarnación: Fuerza 4",
        "buff": "Al equipar 3 o más Registros de Habilidad de Alice en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Asentimiento vital 4",
        "buff": "Defensa +450.",
        "numbers": "flat_def: 450"
    },
    {
        "name": "Mejorar el ataque 5",
        "buff": "Ataque +18%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Rápido y Fácil",
        "buff": "Reduce la resistencia al retroceso en un 100%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "emocionante 4",
        "buff": "Defensa -30% y daño crítico -300% durante el efecto de mejora para aumentar el HP máximo.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Llama Purificadora 3",
        "buff": "Inflige +15% del daño del elemento Fuego al enemigo.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "Corazón opuesto 3",
        "buff": "Ataque +18% a los enemigos que tienen efecto buff",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Resonancia de la Llama 4",
        "buff": "Daño del elemento fuego +30% a los enemigos que tienen un efecto de mejora.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "Rey de lanzas 3",
        "buff": "Ataque +1000 al usar Lanza 2H.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Aumento de brillo 4",
        "buff": "Daño elemental distinto del sagrado infligido a los enemigos -50 % y daño del elemento sagrado a los enemigos +40 %.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, darkDmg: -50, noneDmg: -50, holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "Resultados del entrenamiento 4",
        "buff": "El daño crítico aumenta según tu propio nivel: 0,14 % (máximo 28 %)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Seis caminos 4",
        "buff": "El efecto cambia dependiendo de los Registros de Habilidad en el mismo conjunto. Al equipar 2 de los Registros de Habilidad de Kirito: Inflige +40% del daño del elemento Tierra al enemigo. Al equipar 3 de los Registros de Habilidad de Kirito: Inflige +40% del daño del elemento Viento al enemigo. Al equipar 4 de los Registros de Habilidad de Kirito: Inflige +40% del daño del elemento Fuego al enemigo. Al equipar 5 de los Registros de Habilidad de Kirito: Inflige +40% del daño del elemento Agua al enemigo. Al equipar 6 de los Registros de Habilidad de Kirito: Inflige +50% del daño del elemento Sagrado al enemigo. Al equipar 7 de los Registros de Habilidad de Kirito: Inflige +50% del daño del elemento Oscuro al enemigo.",
        "numbers": "earthDmg: 40, windDmg: 40, fireDmg: 40, waterDmg: 40, holyDmg: 50, darkDmg: 50"
    },
    {
        "name": "Amigo extranjero 1",
        "buff": "El ataque aumenta 200 veces la cantidad de récords de habilidades de lluvia en el mismo conjunto.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Succión de calor 3",
        "buff": "Cuando el jugador tiene dolencias de estado (quemaduras), ataque +40%./â—[Mejorar inmunidad a quemaduras 3] Daño por quemaduras -30%.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Información de la rata 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Argo en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Ataque frontal 4",
        "buff": "Aumento de agresión -40% cuando golpea el ataque",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Flexibilidad 4",
        "buff": "Resistencia a petrificar +80% cuando HP está al 100%. Recupera un máximo de 1% de HP cada 3 segundos cuando HP cae por debajo del 99%.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "Rey de las hachas 3",
        "buff": "Ataque +1000 al usar 2H Axe.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Protección de empuje 3",
        "buff": "Reduce el daño del monstruo con elemento de empuje del 12%.",
        "numbers": "thrustRes: 12"
    },
    {
        "name": "Aprendizaje automático 5",
        "buff": "Agrega efectos adicionales según la cantidad de Registros de habilidades de Alice equipados en el mismo conjunto.2 o más: Tasa de críticos +20%.3 o más: Defensa +5%.4 o más: HP máximo +10%.5 o más: Daño crítico +20%.6 o más: Ataque +35%.",
        "numbers": "crit_rate: 20, def_percent: 5, hp_percent: 10, crit_dmg: 20, general_dmg: 20, atk_percent: 35"
    },
    {
        "name": "¡Súper suerte!",
        "buff": "Un 1% de probabilidad de que el próximo ataque que reciba el enemigo induzca un daño 2,5 veces mayor. (Se aplica a los ataques de otros miembros del grupo. El efecto desaparecerá después de 10 segundos si no se activa).",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "¡Suerte!",
        "buff": "Un 25% de probabilidad de tasa crítica +50% durante 10 segundos.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "¡Suerte incierta!",
        "buff": "Un 75% de probabilidad de ataque +7% durante 30 segundos.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "¡Oh, oh!",
        "buff": "Un 5% de probabilidad de infligirte una maldición durante 20 segundos.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Impulso de la Tierra 4",
        "buff": "Daño elemental distinto de la tierra infligido a los enemigos -50% y daño del elemento tierra a los enemigos +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "Cambio de talento 5",
        "buff": "El efecto cambia dependiendo de los Registros de Habilidad en el mismo conjunto. Cuando se equipa 1 o más Registros de Habilidad de Kirito en el mismo conjunto, +tasa de éxito para Frostbite. Ataque +20% cuando no se equipa ningún Registro de Habilidad de Kirito en el mismo conjunto.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "tramoyista 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Koharu en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Indemnización de las Sombras 1",
        "buff": "Cuando estás maldito, el daño del elemento oscuro +25%.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "Rey de dagas 3",
        "buff": "Ataque +1000 al usar dagas.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Flor de hielo 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Eugeo en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Barra de batalla sangrienta 3",
        "buff": "Ataque +35% al atacar con elemento de corte.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Acumulación de Tierra 3",
        "buff": "El daño del elemento Tierra aumenta según la cantidad de registros de habilidades de Klein en el mismo conjunto x 10%.",
        "numbers": "earthDmg: 10"
    },
    {
        "name": "Conversión acuática 5",
        "buff": "Daño del elemento fuego a los enemigos -15% y daño del elemento agua a los enemigos +30%.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "Asesor táctico 4",
        "buff": "Al equipar 2 o más Registros de Habilidad de Yui en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Puntería 3",
        "buff": "Al equipar 2 o más Registros de Habilidad de Sinon en el mismo conjunto, Ataque +20%.* Evolución y Avance Máximo",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "halo 3",
        "buff": "Defensa -30% y durante el efecto de mejora para aumentar el HP máximo, la tasa de acierto -30%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Tajo agravado 3",
        "buff": "El daño causado por la debilidad del elemento de corte aumenta según la cantidad de registros de habilidades de Eydis en el mismo conjunto x 20%.",
        "numbers": "slashDmg: 20"
    },
    {
        "name": "Plena floración 3",
        "buff": "Al equipar 4 o más Registros de Habilidad de Eydis en el mismo conjunto, Ataque +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Pérdida de carga 1",
        "buff": "Cuando la defensa es -30% y HP está por debajo del 50%, el daño es -1000% a los enemigos débiles a los ataques.* Evolución y avance máximo",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Succión de Tierra 3",
        "buff": "Cuando el jugador tiene dolencias de estado (veneno), ataque +35%./â—[Enhance Antídote 3] Daño de veneno -30%.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Rey de estoques 3",
        "buff": "Ataque +1000 al usar 1H Rapier.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Conversión de viento 5",
        "buff": "Daño del elemento tierra a los enemigos -15% y daño del elemento viento a los enemigos +30%.",
        "numbers": "windDmg: 30, general_dmg: 30"
    },
    {
        "name": "Espadachín negro 3",
        "buff": "Al equipar 2 o más Registros de Habilidad de Kirito en el mismo conjunto, Ataque +20%.* Evolución y Avance Máximo",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Curación súper mejorada",
        "buff": "Efecto de elementos curativos y objetos de campo +100%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Pico 3",
        "buff": "Ataque +40% cuando HP está por encima del 80%.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Amigo extranjero 2",
        "buff": "El ataque aumenta 250 veces la cantidad de récords de habilidades de lluvia en el mismo conjunto.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Hoja afilada 4",
        "buff": "El ataque aumenta en un 6% x la cantidad de Registros de Habilidad de Asuna en el mismo conjunto.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "Indemnización de la Tierra 2",
        "buff": "Cuando estás envenenado, el daño del elemento tierra +35%.",
        "numbers": "earthDmg: 35, general_dmg: 35"
    },
    {
        "name": "Contador de quemaduras 3",
        "buff": "Cuando el jugador tiene dolencias de estado (quemaduras), ataque +1000./â—[Mejorar inmunidad a quemaduras 2] Daño por quemaduras -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Adicto a las especias 3",
        "buff": "Al equipar 2 o más Registros de Habilidad de Kirito en el mismo conjunto, Ataque +20%.* Evolución y Avance Máximo",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Curación acelerada 4",
        "buff": "Recupera un máximo de 4% de HP cada 3 segundos.",
        "numbers": "hp_regen: 4"
    },
    {
        "name": "Conversión de la Tierra 5",
        "buff": "Daño del elemento viento a los enemigos -15% y daño del elemento tierra a los enemigos +30%.",
        "numbers": "earthDmg: 30, general_dmg: 30"
    },
    {
        "name": "Espada Demonio 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Asuna en el mismo conjunto, Ataque +20%* Evolución y Avance Máximo",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Tócalo por Ear 5",
        "buff": "Ataque +25% cuando HP está por encima del 50% y defensa +15% cuando HP está por debajo del 50%.",
        "numbers": "atk_percent: 25, def_percent: 15"
    },
    {
        "name": "Barra de batalla sangrienta 4",
        "buff": "Ataque +40% al atacar con elemento de corte.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Recorrido 3",
        "buff": "Al equipar 4 o más Registros de Habilidad de Kirito en el mismo conjunto, Ataque +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Succión de escarcha 4",
        "buff": "Cuando el jugador tiene Aflicciones de Estado (Congelación), Ataque +50%./â—[Enhance Frostbite 3] Daño por congelación -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "compostura 3",
        "buff": "Tasa de acierto +30% cuando estás congelado.",
        "numbers": "hit_rate: 30"
    },
    {
        "name": "Resonancia del hielo 4",
        "buff": "Daño del elemento agua +30% a los enemigos que tienen un efecto de mejora.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "Conversión oscura 5",
        "buff": "Daño del elemento sagrado a los enemigos -15% y daño del elemento oscuro a los enemigos +30%.",
        "numbers": "darkDmg: 30, general_dmg: 30"
    },
    {
        "name": "Indemnización de las Sombras 2",
        "buff": "Cuando estás maldito, el daño del elemento oscuro +35%.",
        "numbers": "darkDmg: 35, general_dmg: 35"
    },
    {
        "name": "Contador de sangrado 3",
        "buff": "Cuando el jugador tiene dolencias de estado (sangrado), ataque +1000./â—[Mejora de coagulación 2] Daño de sangrado -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Contador de sangrado 4",
        "buff": "Cuando el jugador tiene aflicciones de estado (sangrado), ataque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Indemnización del viento 3",
        "buff": "Cuando el jugador tiene aflicciones de estado (sangrado), daño del elemento viento +40%.",
        "numbers": "windDmg: 40, general_dmg: 40"
    },
    {
        "name": "Romper la presa 3",
        "buff": "Cantidad de indicador de ruptura +30 % en los enemigos.",
        "numbers": "break_pct: 30"
    },
    {
        "name": "Acumulación oscura 3",
        "buff": "El daño del elemento oscuro aumenta según la cantidad de registros de habilidades de Sanya en el mismo conjunto x 10%.",
        "numbers": "darkDmg: 10"
    },
    {
        "name": "Golpe de batalla sangriento 4",
        "buff": "Ataque +40% al atacar con elemento contundente.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Acumulación de llamas 3",
        "buff": "El daño del elemento fuego aumenta en la cantidad de Registros de Habilidad de Asuna en el mismo conjunto x 10%.",
        "numbers": "fireDmg: 10"
    },
    {
        "name": "Golpe ardiente 5",
        "buff": "El ataque contra enemigos quemados aumenta un 30%.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "Conversión de llama 5",
        "buff": "Daño del elemento agua a los enemigos -15% y daño del elemento fuego a los enemigos +30%.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "Artista marcial 3",
        "buff": "Al equipar 2 o más Registros de Habilidad de Leafa en el mismo conjunto, Ataque +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Embestida 1",
        "buff": "Ataque +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Estocada de batalla sangrienta 3",
        "buff": "Ataque +35% al atacar con elemento de empuje.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Fuego del infierno 4",
        "buff": "El ataque aumenta un 7% x la cantidad de registros de habilidades de Kirito en el mismo conjunto.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Prosperar 5",
        "buff": "Ataque +25% cuando HP está por encima del 50%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Perforar 4",
        "buff": "Daño infligido a enemigos débiles al empuje +25%.",
        "numbers": "thrustDmg: 25, general_dmg: 25"
    },
    {
        "name": "compostura 1",
        "buff": "Tasa de acierto +10% cuando estás congelado./â—[Enhance Frostbite 2] Daño por congelación -10%.",
        "numbers": "hit_rate: 10"
    },
    {
        "name": "Acumulación de escarcha 4",
        "buff": "El daño del elemento agua aumenta en la cantidad de registros de habilidades de Eydis en el mismo conjunto x 12,5%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Técnica avanzada de estoque 3",
        "buff": "Daño no elemental +25% al usar 1H Rapier.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Succión de aire 4",
        "buff": "Cuando el jugador tiene dolencias de estado (sangrado), ataque +50%./â—[Mejora de coagulación 3] Daño de sangrado -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Rugido del vendaval 4",
        "buff": "Inflige +15% del daño del elemento viento al enemigo.",
        "numbers": "windDmg: 15"
    },
    {
        "name": "Contador de veneno 4",
        "buff": "Cuando el jugador tiene dolencias de estado (veneno), ataque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "bisecta 4",
        "buff": "Daño infligido a enemigos débiles al corte +25%.",
        "numbers": "slashDmg: 25, general_dmg: 25"
    },
    {
        "name": "Contador de congelación 4",
        "buff": "Cuando el jugador tiene dolencias de estado (congelación), ataque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Acumulación de calor 4",
        "buff": "El daño del elemento fuego aumenta en la cantidad de registros de habilidades de Asuna en el mismo conjunto x 12,5%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Oportunidad de oro 4",
        "buff": "Daño crítico +50%.",
        "numbers": "crit_dmg: 50, general_dmg: 50"
    },
    {
        "name": "Oleada de perforación 3",
        "buff": "El daño a la debilidad del elemento de empuje aumenta en la cantidad de registros de habilidad LLENN en el mismo conjunto x 20%.",
        "numbers": "thrustDmg: 20"
    },
    {
        "name": "Cibermente 2",
        "buff": "El ataque aumenta un 7 % x la cantidad de registros de habilidades de Yui en el mismo conjunto.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Ofensiva de la Espada Sagrada",
        "buff": "El ataque aumenta un 10 % x el número de registros de habilidades de Heathcliff en el mismo conjunto.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Bloqueo1",
        "buff": "Todo el daño elemental disminuye en un 100 % x la cantidad de registros de habilidades de Asuna en el mismo conjunto (incluidos los no elementales).",
        "numbers": "fireDmg: -100, waterDmg: -100, windDmg: -100, earthDmg: -100, holyDmg: -100, darkDmg: -100, noneDmg: -100"
    },
    {
        "name": "Reacción notable",
        "buff": "Tasa de evasión +16%. *No se activará con ataque de enfoque.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Estocada de batalla sangrienta 4",
        "buff": "Ataque +40% al atacar con elemento de empuje.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Valiente 3",
        "buff": "Al equipar 3 o más Registros de Habilidad de Yui en el mismo conjunto, Ataque +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Fe ciega",
        "buff": "El ataque aumenta un 7% x la cantidad de registros de habilidades de Yuna en el mismo conjunto.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Oleada sorprendente 2",
        "buff": "El daño a la debilidad del elemento contundente aumenta en la cantidad de registros de habilidades de Agil en el mismo conjunto x 8%.",
        "numbers": "bluntDmg: 8"
    },
    {
        "name": "Élite comerciante 4",
        "buff": "Al equipar 5 o más Registros de Habilidad de Agil en el mismo conjunto, Ataque +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Succión de Tierra 4",
        "buff": "Cuando el jugador tiene dolencias de estado (veneno), ataque +50%./â—[Enhance Antídote 3] Daño de veneno -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Pulso de tierra 4",
        "buff": "Inflige +15% del daño del elemento Tierra al enemigo.",
        "numbers": "earthDmg: 15"
    },
    {
        "name": "Conversión de brillo 5",
        "buff": "Daño del elemento oscuro a los enemigos -15% y daño del elemento sagrado a los enemigos +30%.",
        "numbers": "holyDmg: 30, general_dmg: 30"
    },
    {
        "name": "Más Deban 4",
        "buff": "Al equipar 1 o más Registros de Habilidad de Silica en el mismo conjunto, Ataque +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "As de dagas 4",
        "buff": "Ataque +40% al usar dagas.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Amigo leal 2",
        "buff": "El ataque aumenta un 7% x la cantidad de registros de habilidades de Sanya en el mismo conjunto.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Mejorar la resolución de aturdimiento. 3",
        "buff": "â— Resistencia al aturdimiento +30%.",
        "numbers": "stunRes: 30"
    },
    {
        "name": "Mejorar la resolución de debilidad. 3",
        "buff": "â— Resistencia a la debilidad +30%",
        "numbers": "debilityRes: 30"
    },
    {
        "name": "Indemnización de hielo 2",
        "buff": "Cuando estás congelado, el daño del elemento agua +35%.",
        "numbers": "waterDmg: 35, general_dmg: 35"
    },
    {
        "name": "Ataque frontal 5",
        "buff": "Aggro aumenta -50% cuando golpea el ataque.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Afecto profundo 4",
        "buff": "La defensa aumenta un 4% x el número de Registros de Habilidad de Asuna en el mismo conjunto. El ataque aumenta un 7% x el número de Registros de Habilidad de Leafa en el mismo conjunto.",
        "numbers": "def_percent: 4, atk_percent: 7"
    },
    {
        "name": "Acumulación de brillo 3",
        "buff": "El daño del elemento sagrado aumenta según la cantidad de registros de habilidades de Sinon en el mismo conjunto x 10%.",
        "numbers": "holyDmg: 10"
    },
    {
        "name": "Contradicción 3",
        "buff": "Ataque +20% cuando no se equipa ningún Registro de Habilidad de Heathcliff en el mismo conjunto.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Protección de la espada sagrada",
        "buff": "La defensa aumenta un 5 % x el número de registros de habilidades de Heathcliff en el mismo conjunto.",
        "numbers": "def_percent: 5"
    },
    {
        "name": "Heridas de batalla reducidas 5",
        "buff": "Reduce el daño de los monstruos de corte, empuje y elementos contundentes y el daño de aflicción de estado en un 5%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Impulso acuático 5",
        "buff": "Daño elemental distinto del agua infligido a los enemigos -50% (no elemental incluido) y daño del elemento agua a los enemigos +45%.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 45, general_dmg: 45"
    },
    {
        "name": "Mejorar Burn Hit 5",
        "buff": "â— +tasa de éxito para Burn.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Mejora del elemento fuego 4/mejora",
        "buff": "Daño del elemento fuego +9,00 % durante 15 s.",
        "numbers": "fireDmg: 9"
    },
    {
        "name": "Pequeña marca/desventaja",
        "buff": "El próximo ataque que reciba el enemigo inducirá 1,5 veces más daño.",
        "numbers": "general_dmg: 50"
    },
    {
        "name": "Fuerza de llama 4/Mejora",
        "buff": "Daño del elemento fuego +15,00 % durante 15 s.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "Mejora del elemento oscuro 4/mejora",
        "buff": "Daño del elemento oscuro +9,00 % durante 15 s.",
        "numbers": "darkDmg: 9"
    }
];
