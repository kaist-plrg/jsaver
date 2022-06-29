import sys
import argparse
import pathlib
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description='Draw violin plots for precision and performance.')
parser.add_argument('path',
        type=pathlib.Path,
        help='a CSV file path')

args = parser.parse_args()
data = pd.read_csv(args.path)

def violin(name, lower, upper):
    fig, ax = plt.subplots(figsize=(10, 3), constrained_layout=True)

    sns.violinplot(x="analyzer", y=name, data=data, color="white", width=1)

    violins = [c for i, c in enumerate(ax.collections) if i%2 == 0]
    [v.set_edgecolor("k") for v in violins]
    [v.set_linewidth(5) for v in violins]

    markers = [c for i, c in enumerate(ax.collections) if i%2 == 1]
    [m.set_facecolor("w") for m in markers]
    [m.set_edgecolor("k") for m in markers]
    [m.set_linewidth(2) for m in markers]
    [m.set_sizes([50]) for m in markers]

    ls = [l for i, l in enumerate(ax.lines)]
    [l.set_color("k") for i, l in enumerate(ls)]
    [l.set_linewidth(2) for i, l in enumerate(ls) if i%2 == 0]
    [l.set_linewidth(5) for i, l in enumerate(ls) if i%2 == 1]

    ax.set(ylim=(lower, upper), xlim=(-1,5))

    plt.show()

violin("precision", -0.1, 1.1)
violin("time-log", 1.2, 4.8)
