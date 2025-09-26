---
title: Finetune VITS and MMS TTS on Low Resource Language Like Uyghur
author:
  name: Piyazon
  link: https://piyazon.top
date: 2025-09-26 11:10:00 +0800
categories: [Blogging, Tutorial]
tags: [ubuntu, wechat, deepin]
---

## Introduction

> [VITS](https://huggingface.co/docs/transformers/model_doc/vits) is a light weight, low-latency model for English text-to-speech (TTS). Massively Multilingual Speech ([MMS](https://huggingface.co/docs/transformers/model_doc/mms#speech-synthesis-tts)) is an extension of VITS for multilingual TTS, that supports over [1100 languages](https://huggingface.co/facebook/mms-tts#supported-languages). 
> Both use the same underlying VITS architecture, consisting of a discriminator and a generator for GAN-based training. They differ in their tokenizers: the VITS tokenizer transforms English input text into phonemes, while the MMS tokenizer transforms input text into character-based tokens.
> You should fine-tune VITS-based checkpoints if you want to use a permissive English TTS model and fine-tune MMS-based checkpoints for every other cases.
> Coupled with the right data and the following training recipe, you can get an excellent finetuned version of every VITS/MMS checkpoints in **20 minutes** with as little as **80 to 150 samples**.



