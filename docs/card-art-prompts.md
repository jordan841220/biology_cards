# Card Art Prompts

這份文件是給繪圖模型直接使用的卡面插圖提示詞。

## 共用規格

- 構圖：`landscape`, 以卡片插圖區為目標，建議比例 `8:5` 或 `4:3`
- 主體：單一明確主體置中，四周保留安全邊界，避免被裁切
- 風格：`scientific fantasy illustration`, `premium tabletop card art`, `clean readable silhouette`, `soft volumetric light`, `high detail`, `stylized biology illustration`
- 禁止：不要文字、不要 UI、不要卡框、不要 watermark、不要 logo
- 建議輸出：先產 `png`，檔名 basename 盡量照下面建議，之後我可以再接回前端

## 共用 Negative Prompt

```text
text, letters, typography, logo, watermark, signature, card frame, user interface, split panel, collage, photoreal microscope photo, cluttered background, low detail, blur, extra limbs, deformed anatomy, gore
```

## 基礎分子

- `腺嘌呤(A)` -> `adenine-a`
  - 描述：DNA 鹼基中的 A，偏琥珀金色，像一顆穩定發光的分子核心
  - Prompt:
```text
scientific fantasy card art, centered adenine nucleobase molecule, amber and ivory palette, glowing molecular ring structure, floating atoms and subtle laboratory particles, clean readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `胸腺嘧啶(T)` -> `thymine-t`
  - 描述：DNA 鹼基中的 T，偏藍白色，精準、冷靜、結構清晰
  - Prompt:
```text
scientific fantasy card art, centered thymine nucleobase molecule, cool blue and pearl white palette, precise molecular geometry, luminous bonds, elegant lab atmosphere, clean silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `胞嘧啶(C)` -> `cytosine-c`
  - 描述：DNA 鹼基中的 C，偏青綠色，具有生長感與化學活性
  - Prompt:
```text
scientific fantasy card art, centered cytosine nucleobase molecule, jade and mint palette, glowing chemical bonds, airy laboratory haze, refined biological illustration, clean readable silhouette, landscape composition, no text, no border, no watermark
```

- `鳥糞嘌呤(G)` -> `guanine-g`
  - 描述：DNA 鹼基中的 G，偏紫藍色，厚重、穩定、能量密度高
  - Prompt:
```text
scientific fantasy card art, centered guanine nucleobase molecule, indigo and violet palette, radiant molecular structure, subtle energy halo, dark-lab elegance, clean readable silhouette, premium card illustration, landscape composition, no text, no border, no watermark
```

- `尿嘧啶(U)` -> `uracil-u`
  - 描述：RNA 鹼基中的 U，偏青藍色，帶流動感
  - Prompt:
```text
scientific fantasy card art, centered uracil nucleobase molecule, turquoise and silver palette, flowing RNA-like energy trails, crisp molecular iconography, luminous clean silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `胺基酸` -> `amino-acid`
  - 描述：一串胺基酸珠鏈與肽鍵，溫暖、有機、有建構感
  - Prompt:
```text
scientific fantasy card art, chain of glowing amino acid spheres connected by peptide bonds, warm gold and ivory palette, organic biochemical texture, centered composition, readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `磷脂質` -> `phospholipid`
  - 描述：典型頭尾分明的磷脂質，像液態膜的基本單元
  - Prompt:
```text
scientific fantasy card art, centered phospholipid molecules with round polar heads and flowing tails, aqua and seafoam palette, fluid membrane energy, clean molecular silhouette, premium biology illustration, landscape composition, no text, no border, no watermark
```

## 分子與胞器

- `DNA` -> `dna`
  - 描述：發光雙股螺旋，具權威感與資訊密度
  - Prompt:
```text
scientific fantasy card art, luminous DNA double helix floating in clean laboratory space, blue white and magenta accent colors, elegant paired base bridges, centered iconic composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `RNA` -> `rna`
  - 描述：單股 RNA 絲帶，靈活、流動、帶指令感
  - Prompt:
```text
scientific fantasy card art, flowing single-strand RNA ribbon with glowing uracil markers, cyan and teal palette, elegant movement, clean centered composition, premium biology illustration, landscape composition, no text, no border, no watermark
```

- `蛋白質` -> `protein`
  - 描述：折疊蛋白質帶狀結構，像功能被摺出的機器
  - Prompt:
```text
scientific fantasy card art, folded ribbon protein structure, warm copper and cream palette, compact functional biomolecule, soft laboratory glow, readable centered silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `細胞膜` -> `membrane`
  - 描述：脂雙層剖面與膜通道，清楚表現保護與邊界
  - Prompt:
```text
scientific fantasy card art, stylized cell membrane lipid bilayer cross section with membrane channel, green teal palette, clean layered structure, bioengineering illustration, centered composition, landscape composition, no text, no border, no watermark
```

- `核糖體` -> `ribosome`
  - 描述：大小兩個亞基夾著 RNA，像正在翻譯的工廠
  - Prompt:
```text
scientific fantasy card art, ribosome with large and small subunits translating an RNA ribbon, cool steel blue palette, molecular factory feeling, centered readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `細胞核` -> `nucleus`
  - 描述：帶有核仁與染色質環帶的細胞核，像指揮中心
  - Prompt:
```text
scientific fantasy card art, glowing cell nucleus with chromatin loops and bright nucleolus, violet white palette, command-center feeling, centered organic sphere silhouette, premium biology illustration, landscape composition, no text, no border, no watermark
```

- `粒線體` -> `mitochondrion`
  - 描述：有明顯內膜皺褶的粒線體，像生物反應爐
  - Prompt:
```text
scientific fantasy card art, detailed mitochondrion with dense inner membrane folds, orange coral palette, biological reactor energy sparks, centered iconic silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

## 細胞

- `上皮細胞` -> `epithelial-cell`
  - 描述：表面保護型細胞，外型規整、貼面、穩定
  - Prompt:
```text
scientific fantasy card art, protective epithelial cell at a tissue surface, clean geometric cell body, soft green palette, orderly biological structure, centered readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `心肌細胞` -> `cardiomyocyte`
  - 描述：具條紋與收縮感的心肌細胞，帶脈搏節奏
  - Prompt:
```text
scientific fantasy card art, cardiomyocyte heart muscle cell with striated fibers and pulse energy, rose red and soft ivory palette, strong contractile feeling, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `神經細胞` -> `neuron`
  - 描述：樹突與軸突清晰的神經元，帶電信號流
  - Prompt:
```text
scientific fantasy card art, neuron with radiating dendrites and long axon carrying electric pulse, indigo violet palette, elegant branching silhouette, centered premium biology illustration, landscape composition, no text, no border, no watermark
```

- `肺泡細胞` -> `alveolar-cell`
  - 描述：與空氣交換相關的肺泡細胞，周圍有微血管感
  - Prompt:
```text
scientific fantasy card art, alveolar cell surrounded by airy sacs and capillary loops, pale cyan and soft coral palette, breathable atmosphere, centered readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

## 組織

- `上皮組織` -> `epithelial-tissue`
  - 描述：整齊鋪展的上皮層，像保護牆面
  - Prompt:
```text
scientific fantasy card art, tiled sheet of epithelial tissue cells forming a protective layer, warm beige and ivory palette, orderly biological surface, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `心肌組織` -> `cardiac-tissue`
  - 描述：成束對齊的心肌纖維，強烈節奏與同步感
  - Prompt:
```text
scientific fantasy card art, aligned bundles of cardiac tissue fibers pulsing in unison, red pink and ivory palette, rhythmic living muscle pattern, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `神經組織` -> `neural-tissue`
  - 描述：密集連接的神經網，顯示資訊傳導
  - Prompt:
```text
scientific fantasy card art, dense neural tissue web made of interconnected neurons, violet blue palette, glowing synaptic links, centered readable network silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `肺泡組織` -> `alveolar-tissue`
  - 描述：多個肺泡囊泡相連成網，柔軟、通氣、帶血流
  - Prompt:
```text
scientific fantasy card art, connected alveolar tissue network of many air sacs with capillary threads, cool cyan and soft red palette, breathable soft structure, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

## 器官

- `皮膚` -> `skin`
  - 描述：皮膚分層剖面，表皮與真皮有保護感
  - Prompt:
```text
scientific fantasy card art, layered skin cross section with epidermis and dermis, warm beige gold palette, protective barrier glow, centered composition, premium biology illustration, landscape composition, no text, no border, no watermark
```

- `心臟` -> `heart`
  - 描述：解剖感心臟，帶心電圖與泵動張力
  - Prompt:
```text
scientific fantasy card art, stylized anatomical heart with electrocardiogram pulse line, deep crimson and ivory palette, dynamic pumping energy, centered heroic composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `大腦` -> `brain`
  - 描述：發光大腦與神經弧線，帶高階控制感
  - Prompt:
```text
scientific fantasy card art, glowing human brain with neural arcs and synaptic sparks, lavender indigo palette, high cognition feeling, centered readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `肺` -> `lung`
  - 描述：雙肺與支氣管分岔，空氣交換感明確
  - Prompt:
```text
scientific fantasy card art, pair of lungs with branching bronchi and soft alveolar glow, pale cyan and flesh pink palette, breathable anatomy, centered composition, premium biology illustration, landscape composition, no text, no border, no watermark
```

## 系統

- `外皮系統` -> `integumentary-system`
  - 描述：人體上半身剪影，皮膚層與保護邊界被強調
  - Prompt:
```text
scientific fantasy card art, human upper body silhouette with highlighted integumentary system and glowing skin barrier layers, warm gold and beige palette, strong protective aura, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `循環系統` -> `circulatory-system`
  - 描述：血管網與心臟構成整體流動系統
  - Prompt:
```text
scientific fantasy card art, human torso silhouette showing circulatory system, luminous heart and branching blood vessels, red crimson and pearl palette, dynamic flow lines, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `神經系統` -> `nervous-system`
  - 描述：人體剪影內的神經網絡與電信號，具直擊感
  - Prompt:
```text
scientific fantasy card art, human torso silhouette with glowing nervous system and electric signal pathways, indigo violet palette, fast precise energy, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `呼吸系統` -> `respiratory-system`
  - 描述：上半身剪影內的氣道、雙肺與呼吸流場
  - Prompt:
```text
scientific fantasy card art, human torso silhouette with respiratory system, trachea bronchi lungs and flowing air currents, cool cyan and white palette, clean breathable anatomy, centered composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

## 個體

- `人類個體` -> `human-individual`
  - 描述：由多個發光系統匯聚成完整人形，具終局感
  - Prompt:
```text
scientific fantasy card art, complete human figure assembled from glowing biological systems, noble final-form composition, gold ivory and subtle multicolor system glow, centered iconic silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

## 特殊戰場卡

- `T 細胞` -> `t-cell`
  - 描述：啟動中的 T 細胞鎖定目標，偏免疫打擊感
  - Prompt:
```text
scientific fantasy card art, activated T cell locking onto a hostile target particle, green white palette with sharp immune energy, tactical hunt feeling, centered readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `大腸桿菌` -> `ecoli`
  - 描述：帶鞭毛的桿狀細菌，侵入感明確
  - Prompt:
```text
scientific fantasy card art, rod-shaped E. coli bacterium with waving flagella, warm amber and brown palette, invasive microbial energy, centered iconic silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `流感病毒` -> `influenza-virus`
  - 描述：帶棘突的流感病毒顆粒，漂浮於呼吸氣流中
  - Prompt:
```text
scientific fantasy card art, spiked influenza virus particle drifting through respiratory air currents, pale cyan and red palette, airborne threat feeling, centered readable silhouette, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

## 物品

- `移液器` -> `pipette`
  - 描述：實驗用移液器將發光液滴滴入培養皿
  - Prompt:
```text
scientific fantasy card art, lab pipette dispensing a glowing droplet into a petri dish, clean tool-focused composition, silver teal and amber palette, precise biotech atmosphere, landscape composition, no text, no border, no watermark
```

- `離心機` -> `centrifuge`
  - 描述：小型離心機與旋轉樣本管，帶高速感
  - Prompt:
```text
scientific fantasy card art, benchtop centrifuge spinning sample tubes with motion blur arcs, cool steel and blue palette, laboratory acceleration feeling, centered composition, landscape composition, no text, no border, no watermark
```

- `PCR 儀` -> `pcr-machine`
  - 描述：PCR 熱循環儀與被放大的 DNA 光帶
  - Prompt:
```text
scientific fantasy card art, PCR thermal cycler amplifying luminous DNA strands, clean biotech machine design, blue white and magenta accent colors, centered composition, landscape composition, no text, no border, no watermark
```

- `定序儀` -> `sequencer`
  - 描述：高端定序儀正在讀取發光基因序列
  - Prompt:
```text
scientific fantasy card art, futuristic DNA sequencer reading glowing genome strands, premium biotech hardware, cyan silver and violet palette, data-rich laboratory atmosphere, centered composition, landscape composition, no text, no border, no watermark
```

- `培養箱` -> `incubator`
  - 描述：溫暖發光的培養箱，內部有細胞培養盤
  - Prompt:
```text
scientific fantasy card art, warm laboratory incubator chamber with glowing culture trays, amber and sterile white palette, protective growth atmosphere, centered composition, landscape composition, no text, no border, no watermark
```

- `藥物` -> `medicine`
  - 描述：藥丸與護盾意象，偏保護與支援
  - Prompt:
```text
scientific fantasy card art, medicine capsule paired with a protective shield emblem, clean medical support iconography, white steel and soft red palette, centered composition, landscape composition, no text, no border, no watermark
```

- `CRISPR` -> `crispr`
  - 描述：基因剪刀切過 DNA 雙股，精準編輯感
  - Prompt:
```text
scientific fantasy card art, gene editing scissors cutting across a DNA helix, crisp biotech precision, blue violet palette, centered iconic composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `抗生素` -> `antibiotic`
  - 描述：抗生素分子或膠囊對準細菌，重點是抑菌
  - Prompt:
```text
scientific fantasy card art, antibiotic capsule and molecular effect targeting a rod-shaped bacterium, medical intervention theme, white teal and warning red palette, centered composition, landscape composition, no text, no border, no watermark
```

## 角色

- `醫師` -> `doctor`
  - 描述：臨床醫師與診療平板，偏穩定治療
  - Prompt:
```text
scientific fantasy card art, doctor in white coat holding a diagnostic tablet, calm medical authority, soft neutral palette with green accents, centered portrait composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `病理學家` -> `pathologist`
  - 描述：病理學家在顯微鏡與玻片旁分析組織
  - Prompt:
```text
scientific fantasy card art, pathologist analyzing tissue slides beside a microscope, clinical insight and precision, beige steel and burgundy palette, centered portrait composition, landscape composition, no text, no border, no watermark
```

- `分子生物學家` -> `molecular-biologist`
  - 描述：操作 DNA 模型與全息分子資料的研究者
  - Prompt:
```text
scientific fantasy card art, molecular biologist manipulating a glowing DNA model and holographic sequence data, modern research atmosphere, blue cyan palette, centered portrait composition, premium tabletop illustration, landscape composition, no text, no border, no watermark
```

- `細胞培養師` -> `cell-culture-specialist`
  - 描述：在無菌操作台前照料培養瓶的研究人員
  - Prompt:
```text
scientific fantasy card art, cell culture specialist tending glowing flasks inside a sterile hood, warm lab light, mint and ivory palette, centered portrait composition, landscape composition, no text, no border, no watermark
```

- `HLA` -> `hla`
  - 描述：免疫辨識標誌與護盾，不必畫成人物
  - Prompt:
```text
scientific fantasy card art, immune recognition emblem inspired by HLA markers, protective shield over cell-surface symbols, green silver palette, precise immunology iconography, centered composition, landscape composition, no text, no border, no watermark
```

## 疾病與干擾

- `癌症` -> `cancer`
  - 描述：失控增生的惡性細胞團塊侵入正常組織
  - Prompt:
```text
scientific fantasy card art, aggressive cluster of mutated cancer cells overtaking healthy tissue, dark crimson and sickly pink palette, invasive chaotic growth, centered readable silhouette, landscape composition, no text, no border, no watermark
```

- `流感` -> `flu`
  - 描述：呼吸道中的冰冷感染雲與病毒散播感
  - Prompt:
```text
scientific fantasy card art, influenza infection cloud moving through the respiratory tract, icy cyan and fever red palette, airborne sickness atmosphere, centered composition, landscape composition, no text, no border, no watermark
```

- `遺傳性突變` -> `genetic-mutation`
  - 描述：DNA 鏈出現裂縫與錯配，帶突變警示感
  - Prompt:
```text
scientific fantasy card art, cracked DNA strand with altered mismatched bases, warning energy and mutation sparks, blue violet palette with red accents, centered composition, landscape composition, no text, no border, no watermark
```

- `RNAi` -> `rnai`
  - 描述：小 RNA 包覆並沉默一條訊息 RNA
  - Prompt:
```text
scientific fantasy card art, RNA interference strands wrapping around and silencing a messenger RNA ribbon, cyan indigo palette, molecular suppression effect, centered composition, landscape composition, no text, no border, no watermark
```

- `細胞凋亡` -> `apoptosis`
  - 描述：單一細胞安靜分裂成 apoptotic bodies，偏臨床而非血腥
  - Prompt:
```text
scientific fantasy card art, one cell undergoing apoptosis and separating into neat apoptotic bodies, clinical and elegant, soft coral and ivory palette, centered composition, landscape composition, no text, no border, no watermark
```

- `訊號阻斷` -> `signal-block`
  - 描述：受體訊號被切斷，像中斷的神經或分子路徑
  - Prompt:
```text
scientific fantasy card art, interrupted cell signaling pathway with severed receptor beam, sharp stoppage effect, blue gray and warning red palette, centered composition, landscape composition, no text, no border, no watermark
```

- `發炎反應` -> `inflammation`
  - 描述：泛紅腫脹的組織與免疫介質火花
  - Prompt:
```text
scientific fantasy card art, inflamed tissue with redness swelling and cytokine sparks, hot red orange palette, immune overreaction atmosphere, centered readable silhouette, landscape composition, no text, no border, no watermark
```

## 目前已經有接檔名的卡

如果你想直接覆蓋目前前端已接上的 basename，優先使用這些名稱：

- `amino-acid`
- `phospholipid`
- `dna`
- `rna`
- `protein`
- `membrane`
- `ribosome`
- `nucleus`
- `mitochondrion`
- `epithelial-cell`
- `cardiomyocyte`
- `neuron`
- `alveolar-cell`
- `epithelial-tissue`
- `cardiac-tissue`
- `neural-tissue`
- `alveolar-tissue`
- `skin`
- `heart`
- `brain`
- `lung`
- `t-cell`
- `hla`
- `crispr`
- `medicine`
- `ecoli`
- `influenza-virus`

其餘尚未接到前端的卡，可以先照上面建議 basename 產圖；等你放進專案後，我再幫你把映射補齊。
