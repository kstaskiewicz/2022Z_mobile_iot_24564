namespace Alignment;

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();

        var a = new BoxView { Color = Colors.Silver, HeightRequest = 40 };
        var b = new BoxView { Color = Colors.Blue, HeightRequest = 40 };
        var c = new BoxView { Color = Colors.Gray, HeightRequest = 40 };

        stack.Children.Add(a);
        stack.Children.Add(b);
        stack.Children.Add(c);
    }
}

