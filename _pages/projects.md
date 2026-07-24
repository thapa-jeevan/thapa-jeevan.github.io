---
layout: archive
title: "Projects"
excerpt: "Selected research and industry machine-learning projects by Jeevan Thapa."
last_modified_at: 2026-07-24
permalink: /projects/
author_profile: true
classes:
  - projects-page
redirect_from:
  - /collection-archive/
  - /portfolio/
  - /portfolio/portfolio-1/
  - /portfolio/portfolio-2/
---

<p class="page-intro">Selected work across continual learning, recommendation, computer vision, bioinformatics machine learning, and applied data systems.</p>

## Research

<div class="project-grid">
  <article class="project-card project-card--featured">
    <div class="project-card__topline">
      <p class="project-card__organization">Zillow Group</p>
      <span>Continual user modeling</span>
    </div>
    <h3>Evolving Mixture of Low-Rank Experts for Continual User Modeling</h3>
    <p>Developed a mixture-of-rank-1-experts architecture for continual user modeling, enabling parameter-efficient adaptation to sequential recommendation data.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Recommender systems</li>
      <li>Mixture of experts</li>
      <li>Low-rank adaptation</li>
    </ul>
    <div class="project-card__footer">
      <span>Published at ECIR 2026</span>
      <a href="https://link.springer.com/chapter/10.1007/978-3-032-21300-6_21">Read paper <span aria-hidden="true">↗</span></a>
    </div>
  </article>

  <article class="project-card project-card--featured">
    <div class="project-card__topline">
      <p class="project-card__organization">RIT</p>
      <span>Continual learning</span>
    </div>
    <h3>Bayesian Network Structure Adaptation</h3>
    <p>Developed a continual structure adaptation framework that integrates beta-Bernoulli processes for structure inference within the sequential Bayes framework, enabling dynamic evolution of both network depth and width in continual learning scenarios.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Bayesian modeling</li>
      <li>Structure adaptation</li>
    </ul>
    <div class="project-card__footer">
      <span>Published at ICML 2024</span>
      <a href="https://openreview.net/pdf?id=c9HddKGiYk">Read paper <span aria-hidden="true">↗</span></a>
    </div>
  </article>

  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">RIT</p>
      <span>Class-incremental learning</span>
    </div>
    <h3>Cross-Task Representation Alignment for Exemplar-Free Class-Incremental Learning</h3>
    <p>Developed a cross-task representation-alignment framework that improved average accuracy by 2.16 percentage points for exemplar-free class-incremental learning.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Exemplar-free</li>
      <li>Representation alignment</li>
    </ul>
    <div class="project-card__footer">
      <span>Manuscript under review</span>
    </div>
  </article>

  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">RIT</p>
      <span>Bioinformatics ML</span>
    </div>
    <h3>Bayesian Adaptive Graph Neural Network for Gene-Disease Association</h3>
    <p>Developing a Bayesian adaptive graph neural network for gene-disease association prediction over protein-protein interaction graphs.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Gene-disease association</li>
      <li>Graph learning</li>
      <li>Bayesian ML</li>
    </ul>
    <div class="project-card__footer">
      <span>Currently conducting benchmark evaluation</span>
    </div>
  </article>

  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">Pulchowk Campus</p>
      <span>Computer vision</span>
    </div>
    <h3>Nepalese License Plate Recognition, Undergraduate Capstone Project</h3>
    <p>Developed a license plate recognition system, tailored for Nepalese license plates, with three key stages: vehicle detection, license plate localization, and Nepalese character recognition.</p>
    <p>Created a license plate localization dataset by annotating Nepalese vehicle images, alongside building a Nepalese character recognition dataset using Devanagari fonts.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Object detection</li>
      <li>Object localization</li>
      <li>Character recognition</li>
    </ul>
    <div class="project-card__footer">
      <span>Undergraduate capstone</span>
    </div>
  </article>
</div>

## Industry

<div class="project-grid">
  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">Fusemachines</p>
      <span>Multimodal ML</span>
    </div>
    <h3>Human Trafficking Recognition from Online Advertisements and Inter-Ad Matching</h3>
    <p>Led the development of a multimodal machine-learning pipeline for identifying potential trafficking activity in online advertisements using video, image, and text data.</p>
    <p>Built image–text contrastive models for advertisement matching, face-based identity linking, and BERT-based social-handle extraction, improving cross-ad linkage accuracy by 35%.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Contrastive learning</li>
      <li>Inter-ad matching</li>
      <li>Face recognition</li>
    </ul>
  </article>

  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">Fusemachines</p>
      <span>Edge computer vision</span>
    </div>
    <h3>Waste Type Detection</h3>
    <p>Developed a lightweight object detector that increased inference throughput by 47%, then deployed it on NVIDIA Jetson Nano devices for real-time waste-type and disposal-intent classification.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Edge AI</li>
      <li>Object detection</li>
    </ul>
  </article>

  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">Fusemachines</p>
      <span>Data analysis</span>
    </div>
    <h3>Analysis of Radio Panelists Data</h3>
    <p>Analyzed the impact of song quality, commercial length, and time of day on panelist retention, designing custom metrics and statistical tests to quantify song quality.</p>
    <p>Resolved date-inconsistency bugs in the existing data pipeline and built a feature-engineering pipeline to augment the dataset.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Statistical testing</li>
      <li>Feature engineering</li>
    </ul>
  </article>

  <article class="project-card">
    <div class="project-card__topline">
      <p class="project-card__organization">Fusemachines</p>
      <span>Anomaly detection</span>
    </div>
    <h3>Session-based Network Intrusion Detection System</h3>
    <p>Designed and validated an AutoEncoder-based semi-supervised learning pipeline for network anomaly detection, engineering session-level features from raw pcap traffic captures.</p>
    <ul class="project-card__tags" aria-label="Project keywords">
      <li>Autoencoders</li>
      <li>Network security</li>
    </ul>
  </article>
</div>
